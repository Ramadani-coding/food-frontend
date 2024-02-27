const TransactionList = ({ transactions }) => {
  return (
    <div className="w-full h-full max-h-[90vh] grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 items-center gap-4">
      {transactions.map((transaction, index) => {
        return (
          <div
            className="bg-slate-100  min-h-64 max-h-64 rounded-3xl ring-2 ring-[#78350F] p-6 flex flex-col transition-all hover:ring-[#FB923C]"
            key={index}
          >
            <h3 className="text-lg font-bold">{transaction.no_order}</h3>
            <div className="flex flex-col gap-3 mt-3 max-h-[20%] overflow-auto">
              {transaction.products.map((product, index) => {
                return (
                  <div key={index}>
                    <p>Nama Product: {product.product} </p>
                    <p>Quantity: {product.quantity} </p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-auto">
              <p className="text-base">
                Total Harga: Rp
                {new Intl.NumberFormat("id-ID").format(transaction.total_price)}
              </p>
              <p className="text-base">
                Total Bayar: Rp
                {new Intl.NumberFormat("id-ID").format(transaction.paid_amount)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
