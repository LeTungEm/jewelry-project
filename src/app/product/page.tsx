import SlideShowCPN from '@/components/library/SlideShowCPN';
import ProductCardCPN from '@/components/library/ProductCardCPN';
import ServiceSTN from '@/components/section/ServiceSTN';


export default function ProductList() {
    const categories = ["Charms (23)", "Bracelets (58)", "Rings (156)"];
    return (
      <div>
            <SlideShowCPN/>
            <div className='flex justify-between items-center mx-[10%] mt-5'>
                <div>&nbsp;</div>
                <div className='flex gap-5 items-center text-[var(--light-gray)]'>
                    5000 sản phẩm
                    <div className='relative flex gap-10 border border-[var(--light-gray)] rounded-md px-5 py-1'>
                        <span>Sắp xếp: <b>Mặc định</b></span>
                        <label htmlFor="fiterProduct">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 24" fill="none">
                                <path d="M1 7L8 1L15 7" stroke="#808080"/>
                                <path d="M1 17L8 23L15 17" stroke="#808080"/>
                            </svg>
                        </label>
                        <input hidden className='peer' type="checkbox" id="fiterProduct" />
                        <div className='hidden peer-checked:block text-center bg-white border border-[var(--light-gray)] rounded-md absolute top-full left-0 w-full z-[1]'>
                            <label htmlFor="fiterProduct" className='block hover:text-white hover:bg-[var(--light-gray)] py-1 px-3 '>Mặc định</label>
                            <label htmlFor="fiterProduct" className='block hover:text-white hover:bg-[var(--light-gray)] py-1 px-3 '>Mặc định</label>
                            <label htmlFor="fiterProduct" className='block hover:text-white hover:bg-[var(--light-gray)] py-1 px-3 '>Mặc định</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 px-[10%] py-5 mb-10'>
                <div className='col-span-1'>
                    <div className='py-2 border-t border-[var(--black)]'>
                        <div className='mb-5 text-xl'>Category</div>
                        {
                            categories.map(item => 
                                <div key={item} className='flex gap-5 mb-3'>
                                    <input className='w-5 h-5 rounded-none' type="checkbox" name="" id="" />
                                    <span className='text-[var(--black)]'>{item}</span>
                                </div>
                            )
                        }
                        
                    </div>
                    <div className='py-2 border-t border-[var(--black)]'>
                        <div className='mb-5 text-xl'>Category</div>
                        {
                            categories.map(item => 
                                <div key={item} className='flex gap-5 mb-3'>
                                    <input className='w-5 h-5 rounded-none' type="checkbox" name="" id="" />
                                    <span className='text-[var(--black)]'>{item}</span>
                                </div>
                            )
                        }
                        
                    </div>
                    
                    
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-5'>
                        <ProductCardCPN product={"/images/products/2.png"}/>
                        <ProductCardCPN product={"/images/products/2.png"}/>
                        <ProductCardCPN product={"/images/products/2.png"}/>
                        <ProductCardCPN product={"/images/products/2.png"}/>
                        <ProductCardCPN product={"/images/products/2.png"}/>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <span className='px-6 py-2 border border-black'>More</span> 
                    </div>
                </div>
            </div>
            <ServiceSTN/>
      </div>
    );
  };