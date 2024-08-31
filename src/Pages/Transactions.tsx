import React, { useState, useRef } from 'react';
import { LuEye } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import success from "../assets/images/frame/success.png";
import initiated from "../assets/images/frame/warning.png";
import failed from "../assets/images/frame/error.png";
import Layout from '../components/Layout';

const transactionData = [
  {
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    dateTime: "6th January, 2024, 06:29PM",
    icon: initiated,
  },
  {
    service: "Airtel DATA VTU",
    phoneNumber: "07089075584",
    amount: 2000,
    totalAmount: 2000,
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179613",
    dateTime: "6th January, 2024, 06:29PM",
    icon: success
  },
  {
    service: "Startime",
    phoneNumber: "6543654304",
    amount: 4000,
    totalAmount: 4000,
    status: "Failed",
    paymentMethod: "Card Payment",
    transactionNo: "17045621860850336938179613",
    dateTime: "6th January, 2024, 06:29PM",
    icon: failed,
  },
];

const Transactions: React.FC = () => {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const filteredTransactions = transactionData.filter(transaction =>
    transaction.service.toLowerCase().includes(filterText.toLowerCase()) ||
    transaction.phoneNumber.includes(filterText) ||
    transaction.transactionNo.includes(filterText)
  );

  const openModal = (transaction: any) => {
    setSelectedTransaction(transaction);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    modalRef.current?.close();
  };

  return (
    <Layout>
      <section className="flex flex-col justify-center  p-3   bg-transparent">
        <div className='mb-8'>
          <label className="input border-[#e7edf8] bg-[#F7F9FD] input-bordered w-full md:w-52 flex items-center gap-1">
            <span><IoFilterOutline /></span>
            <input
              type="text"
              className="border-0 input input-bordered input-primary w-full"
              placeholder="Filter"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='text-[15px]'>
                <th>Service</th>
                <th>Amount</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Transaction No</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src={transaction.icon} alt="" className="w-8 h-8" />
                      <div>
                        <div className="font-bold">{transaction.service}</div>
                        <div className="text-sm">{transaction.phoneNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center'>
                      <TbCurrencyNaira className='text-lg' />
                      {transaction.amount.toFixed(2)}
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center'>
                      <TbCurrencyNaira className='text-lg' />
                      {transaction.totalAmount.toFixed(2)}
                    </div>
                  </td>
                  <td className={`font-semibold ${transaction.status === 'Successful' ? 'text-success' : transaction.status === 'Failed' ? 'text-error' : 'text-warning'}`}>
                    {transaction.status}
                  </td>
                  <td>{transaction.paymentMethod}</td>
                  <td>
                    <div>
                      <div className="font-bold">{transaction.transactionNo}</div>
                      <div className="text-sm">{transaction.dateTime}</div>
                    </div>
                  </td>
                  <th>
                    <div className="dropdown  dropdown-end ">
                      <div tabIndex={0} role="button" className="btn text-[#4169E1] hover:bg-[#bfc4cf] bg-[#EFF3FB] btn-ghost btn-sm m-1">Open</div>
                      <ul tabIndex={0} className="mt-5 bg-transparent dropdown-content cyan-text menu bg-base-100 rounded-md z-[1] w-36  p-2 shadow">
                        <a className='flex p-2 gap-2 rounded-md hover:bg-base-300' onClick={() => openModal(transaction)}> <LuEye className='my-auto' />View </a>
                        <a className='flex p-2 gap-2 rounded-md hover:bg-base-300'> <RiDeleteBin5Line className='my-auto' />Delete </a>
                      </ul>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <dialog ref={modalRef} id="my_modal_3" className="modal bg-transparent">
          <div className="modal-box bg-transparent w-11/12 max-w-2xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
            <h3 className="font-bold text-lg">Transaction Details</h3>
            {selectedTransaction && (
              <>
                <p className="py-4">Service: {selectedTransaction.service}</p>
                <p className="py-4">Phone Number: {selectedTransaction.phoneNumber}</p>
                <p className="py-4">Amount: <TbCurrencyNaira className='inline text-lg' />{selectedTransaction.amount.toFixed(2)}</p>
                <p className="py-4">Total Amount: <TbCurrencyNaira className='inline text-lg' />{selectedTransaction.totalAmount.toFixed(2)}</p>
                <p className="py-4">Status: {selectedTransaction.status}</p>
                <p className="py-4">Payment Method: {selectedTransaction.paymentMethod}</p>
                <p className="py-4">Transaction No: {selectedTransaction.transactionNo}</p>
                <p className="py-4">Date & Time: {selectedTransaction.dateTime}</p>
              </>
            )}
          </div>
        </dialog>
      </section>
    </Layout>
  );
};

export default Transactions;
