import SalertUI from "./SalertUI";

const SweetAlert = ({images}) =>{
    return(
        <>
            <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
               <SalertUI 
               images = "https://images.prothomalo.com/prothomalo-bangla%2F2023-06%2F619a4edf-d863-4705-8331-b1d9361cc16c%2FShubho_03.jpeg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
               heading = 'হাজারো ইসরায়েলির বিক্ষোভের কিছু মুহূর্ত'
               description = 'রাজপথে ঘোড়ায় চড়ে বিক্ষোভকারীদের মুখোমুখি এক পুলিশ সদস্য। ১ সেপ্টেম্বর, ইসরায়েলের তেল আবিবে'
               />

                <SalertUI 
               images = "https://images.prothomalo.com/prothomalo-bangla%2F2024-09-02%2Fpsimsjgn%2FKafi-Detained.jpg?rect=2%2C0%2C887%2C591&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
               heading = 'ঢাকা জেলার অতিরিক্ত পুলিশ সুপার আবদুল্লাহিল কাফী আটক'
               description = 'ঢাকা জেলার অতিরিক্ত পুলিশ সুপার (সুপারনিউমারারি পুলিশ সুপার পদে পদোন্নতিপ্রাপ্ত) আবদুল্লাহিল কাফীকে'
               />   

<SalertUI 
               images = "https://images.prothomalo.com/prothomalo-bangla%2F2024-09-02%2F6s50hjwh%2Findia%20em.jfif?rect=0%2C0%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
               heading = 'স্বরাষ্ট্র উপদেষ্টার সঙ্গে ভারতীয় হাইকমিশনারের সাক্ষাৎ'
               description = 'অন্তর্বর্তী সরকারের স্বরাষ্ট্র উপদেষ্টা লেফটেন্যান্ট জেনারেল (অব.) মো. জাহাঙ্গীর আলম চৌধুরীর সঙ্গে'
               />   
            </div>
        </>
    );
}
export default SweetAlert;