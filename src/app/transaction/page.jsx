import Layouts from "@/components/Layouts";

const Page = () => {
  return (
    <Layouts>
      <div className="w-full h-screen flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Transaction Number</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name Food</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>Sandwich</td>
                    <td>Rp.10.000</td>
                    <td>5</td>
                  </tr>
                  <tr className="hover">
                    <td>Hot Coffee</td>
                    <td>Rp.5.000</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="menu bg-base-100 w-56 rounded-box">
              <li>
                <a>Total = Rp.60.000</a>
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Transaction Number</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name Food</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>Sandwich</td>
                    <td>Rp.10.000</td>
                    <td>5</td>
                  </tr>
                  <tr className="hover">
                    <td>Hot Coffee</td>
                    <td>Rp.5.000</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="menu bg-base-100 w-56 rounded-box">
              <li>
                <a>Total = Rp.60.000</a>
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Transaction Number</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name Food</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>Sandwich</td>
                    <td>Rp.10.000</td>
                    <td>5</td>
                  </tr>
                  <tr className="hover">
                    <td>Hot Coffee</td>
                    <td>Rp.5.000</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="menu bg-base-100 w-56 rounded-box">
              <li>
                <a>Total = Rp.60.000</a>
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Transaction Number</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name Food</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>Sandwich</td>
                    <td>Rp.10.000</td>
                    <td>5</td>
                  </tr>
                  <tr className="hover">
                    <td>Hot Coffee</td>
                    <td>Rp.5.000</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="menu bg-base-100 w-56 rounded-box">
              <li>
                <a>Total = Rp.60.000</a>
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
