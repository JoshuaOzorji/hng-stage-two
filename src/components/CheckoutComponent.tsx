import { IoCheckboxSharp } from "react-icons/io5";
import checkout from "/checkout-1.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import mastercard from "/mastercard.png";
import visa from "/visa.png";
import paypal from "/paypal.png";

const paymentItems = [{ name: mastercard }, { name: visa }, { name: paypal }];

const CheckoutComponent = () => {
	return (
		<main className='font-montserrat flex flex-col md:flex-row gap-4 my-2'>
			<section className='md:w-[60%]'>
				<div className='text-white bg-black text-[10px] md:text-sm p-1 md:p-3'>
					<span className='flex justify-between'>
						<p>Shipping fee</p>

						<p>Add {">"} </p>
					</span>
					<p>FREE STANDARD SHIPPING on PANDAS products</p>
				</div>

				<div className='bg-[#EFC88B] p-2 flex items-center gap-2 my-6'>
					<IoCheckboxSharp className='text-black' />
					<p className='text-black font-bold'>ALL ITEMS (2)</p>
				</div>

				<div className='p-2 flex items-center gap-2 font-daysOne my-2'>
					<IoCheckboxSharp className='text-black' />
					<p className='text-black font-bold'>PANDAS</p>
				</div>

				{/* ITEM 1 */}
				<div className='flex items-center gap-2 my-4'>
					<div className='md:w-[5%] flex items-center justify-center'>
						<IoCheckboxSharp className='text-black' />
					</div>

					<div className='md:w-[15%]'>
						<img src={checkout} alt='' className='object-contain' />
					</div>

					<div className='w-[80%] text-[10px] md:text-sm'>
						<h3 className='font-bold'>Printed 21 Blue T-Shirt</h3>
						<span className='flex gap-1 my-2'>
							<p>Colour:</p> <p className='font-bold'>Night/Black</p>
						</span>

						<div className='flex justify-between '>
							<div className='flex gap-1'>
								<p className='text-[#CF5C36] font-bold'>N40.00</p>
								<p className='text-neutral-500 line-through '>N40.00</p>
							</div>

							<div className='flex items-center justify-between md:gap-6'>
								<span className='border rounded-lg flex px-4 py-0.5 items-center text-sm border-black gap-4'>
									Qty 1
									<MdKeyboardArrowDown />
								</span>

								<CiHeart className='w-5 h-5' />

								<BsTrash className='w-4 h-4' />
							</div>
						</div>
					</div>
				</div>

				{/* ITEM 2 */}
				<div className='flex items-center gap-2'>
					<div className='md:w-[5%] flex items-center justify-center'>
						<IoCheckboxSharp className='text-black' />
					</div>

					<div className='md:w-[15%]'>
						<img src={checkout} alt='' className='object-contain' />
					</div>

					<div className='w-[80%] text-[10px] md:text-sm'>
						<h3 className='font-bold'>Printed 21 Blue T-Shirt</h3>
						<span className='flex gap-1 my-2'>
							<p>Colour:</p> <p className='font-bold'>Night/Black</p>
						</span>

						<div className='flex justify-between '>
							<div className='flex gap-1'>
								<p className='text-[#CF5C36] font-bold'>N40.00</p>
								<p className='text-neutral-500 line-through '>N40.00</p>
							</div>

							<div className='flex items-center justify-between md:gap-6'>
								<span className='border rounded-lg flex px-4 py-0.5 items-center text-sm border-black gap-4'>
									Qty 1
									<MdKeyboardArrowDown />
								</span>

								<IoMdHeart className='w-5 h-5 text-[#F44336]' />

								<BsTrash className='w-4 h-4' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='md:w-[40%] flex flex-col gap-10'>
				<div className='bg-[#F0F2F5] flex flex-col p-6 gap-4 rounded-lg'>
					<h3 className='font-bold text-sm md:text-base'>Order Summary</h3>

					<span className='text-right'>
						<p className='font-bold'>N14.00</p>
						<p className='text-[#F44336] text-[10px] md:text-[12px]'>
							saved N2.00
						</p>
						<p className='text-[10px] md:text-[12px]'>Reward 40 Panda POINTS</p>
					</span>

					<button className='w-full text-white bg-black rounded-lg p-2 font-bold'>
						Checkout Now(2)
					</button>
				</div>

				<div className='bg-[#F0F2F5] flex flex-col p-6 gap-4 rounded-lg'>
					<h3 className='font-bold'>We Accept</h3>

					<img src='' alt='' />
				</div>
			</section>
		</main>
	);
};

export default CheckoutComponent;
