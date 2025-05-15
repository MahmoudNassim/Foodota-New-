import { useMemo } from "react";
import { domain, useCart } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { AuthRepo } from "../../data/repo/AuthRepo";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function CartOffcanvas() {
  const isCartOpen = useCart((state) => state.isCartOpen);
  const closeCart = useCart((state) => state.closeCart);
  const cart = useCart((state) => state.cart);
  const increamentQty = useCart((state) => state.increamentQty);
  const decreamentQty = useCart((state) => state.decreamentQty);
  const removeItem = useCart((state) => state.removeItem);
  const navigat = useNavigate();

  const total = useMemo(() => {
    return cart.reduce((acc, el) => acc + el.qty * el.product_price, 0);
  }, [cart]);

  const handlePlaceOrder = () => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Sign Up or Login to Place Order",
      });
      sessionStorage.setItem("redirect", "checkout");
      navigat("/login");
    } else {
      AuthRepo.checktoken(token).then((res) => {
        if (res) {
          closeCart();
          navigat("/restaurants/orders/checkout");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Sign Up or Login to Place Order",
          });
          sessionStorage.setItem("redirect", "checkout");
          navigat("/login");
        }
      });
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 z-[3999]"
      ></div>

      <div className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-[4000] p-4 overflow-y-auto transition-all duration-500">
        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((el, index) => (
              <div
                key={el.documentId}
                className="flex justify-between gap-3 border border-gray-200 rounded-lg p-2 shadow-sm"
              >
                <img
                  src={domain + el.product_img.url}
                  alt={el.product_name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 flex flex-col gap-1">
                  <h2 className="font-semibold text-sm">{el.product_name}</h2>
                  <p className="text-[12px] text-gray-700">
                    {el.restaurant[0]?.brand_name}
                  </p>
                  <p className="text-sm text-gray-700">
                    {el.product_price * el.qty} EGP
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreamentQty(index)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{el.qty}</span>
                    <button
                      onClick={() => increamentQty(index)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="btn btn-error h-fit self-end p-2.5"
                  title="Remove"
                >
                  <FaRegTrashCan className="text-white" />
                </button>
              </div>
            ))}
            <div className="pt-4 border-t text-right font-bold">
              Total: {total} EGP
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handlePlaceOrder}
                className="btn btn-warning mt-4"
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            There are no products in cart.
          </p>
        )}
      </div>
    </>
  );
}
