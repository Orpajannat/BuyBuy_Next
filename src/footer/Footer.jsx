export const Footer = () => {
  return (
    <div className="bg-mauve-500 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-5 p-10">
            <h1 className="font-semibold md:text-6xl text-5xl">BuyBuy</h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 p-10">
            <div className="flex flex-col items-center">
                <div>
                    <h3 className="font-semibold">Services</h3>
                </div>
                <div className="flex flex-col items-center">
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h3 className="font-semibold">Services</h3>
                </div>
                <div className="flex flex-col items-center">
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h3 className="font-semibold">Services</h3>
                </div>
                <div className="flex flex-col items-center">
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
            </div>
        </div>
    </div>
  );
};