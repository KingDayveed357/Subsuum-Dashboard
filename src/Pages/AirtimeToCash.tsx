
import Layout from '../components/Layout';
import CustomSelect from '../components/CustomSelect';

const AirtimeToCash = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center p-4 sm:p-8'>
        <div className='flex flex-wrap justify-center gap-3 mb-4'>
          <div className='w-28 sm:w-36 flex flex-col border-b-[6px] rounded-bl-md border-[#4169E1] rounded-br-md '>
            <p className='text-center blue-text text-sm sm:text-base'>Fill info</p>
          </div>
          <div className='w-28 sm:w-36 flex flex-col border-b-[6px] border-[#D7E1F4] rounded-bl-md rounded-br-md'>
            <p className='text-center text-[#D7E1F4] text-sm sm:text-base'>Make Payment</p>
          </div>
          <div className='w-28 sm:w-36 flex flex-col border-b-[6px] border-[#D7E1F4] rounded-bl-md rounded-br-md'>
            <p className='text-center text-[#D7E1F4] text-sm sm:text-base'>View Receipt</p>
          </div>
        </div>
        <form action="" className='bg-[#F7F9FD] border-2 border-[#D7E1F4] rounded-xl p-4 sm:p-6 mt-7 w-full max-w-md'>
          <p className='text-center text-lg sm:text-xl text-[#4C689E] font-semibold'>Airtime to Cash</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-6'>
            <div className='flex flex-col'>
              <label htmlFor="Select Network" className='text-[#4C689E]'>Select Network</label>
              <CustomSelect />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="Phone Number" className='text-[#4C689E]'>Phone Number</label>
              <input type="text" className='input input-bordered w-full border-[#D7E1F4]' placeholder='0809456227' />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="Amount" className='text-[#4C689E]'>Amount</label>
            <input type="text" className='input input-bordered w-full border-[#D7E1F4]' placeholder='₦5000' />
          </div>
          <div className="mb-4">
            <label htmlFor="Airtime Share Pin" className='text-[#4C689E]'>Airtime Share Pin</label>
            <input type="text" className='input input-bordered w-full border-[#D7E1F4]' placeholder='₦5000' />
          </div>
          <button className='btn bg-[#4169E1] mt-7 w-full text-white'>Proceed</button>
        </form>
      </section>
    </Layout>
  );
};

export default AirtimeToCash;
