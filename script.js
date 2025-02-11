document.addEventListener('DOMContentLoaded', function() {
    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(function(e) {
       // Handle the play promise rejection if the user hasn't interacted with the page
       console.log('Autoplay was prevented: ' + e);
    });
 
    // Together Section - Countdown Timer
    const startDate = new Date('2024-03-30T10:36:00');
    function updateCounter() {
       const now = new Date();
       const difference = now - startDate;
 
       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((difference % (1000 * 60)) / 1000);
 
       document.getElementById("countDisplay").innerText = 
          `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ❤️`;
    }
    setInterval(updateCounter, 1000);
    updateCounter();
 
    // Memories Section - Array of Images and Texts
    const memories = [
       {src: '1photo.jpg', text: 'Our first mirror selfie', color: '#5D3584'},
       {src: '2photo.jpg', text: 'အကြိုက်ဆုံးအပြုံး😚😚', color: '#5D3584'},
       {src: '4photo.jpg', text: 'သဲမကြိုက်မှန်းသိတယ် \nဒါပေမဲ့ မောင်မောင်ကြိုက်😆', color: '#5D3584'},
       {src: '7photo.jpg', text: 'နှစ်ယောက်သားလိုက်ဖက်နေမှုကြီး😩', color: '#5D3584'},
       {src: '9photo.jpg', text: 'ရေဘဲစီးရင်း😙', color: '#5D3584'},
       {src: '10photo.jpg', text: 'မာလာရှမ်းကော 45000 ဖိုးစားတုန်းကထင်တယ်🥲', color: '#5D3584'},
       {src: '16photo.jpg', text: 'အူကြူးလေးအရမ်းလှ😡', color: '#5D3584'},
       {src: '23photo.jpg', text: 'သဲသဲနဲ့  သဲသဲရဲ့major welcome မှာ🤗', color: '#5D3584'},
       {src: '27photo.jpg', text: 'ကုလားမလေးနဲ့အမှတ်တရ😜🤪', color: '#5D3584'},
       {src: '24photo.jpg', text: 'အပြုံးချိုချိုလေးချစ်လို့👻', color: '#5D3584'},
       {src: '29photo.jpg', text: 'ကန်တော်ကြီးမှာ date တုန်းက😭', color: '#5D3584'},
       {src: 'pagoda.jpg', text: 'မောင်တို့ရဲ့ ပထမဆုံးအကြိမ်ဘုရားဖူးတူတူသွားတုန်းက💝', color: '#5D3584'},
       {src: '6photo.jpg', text: 'စာမကျက်ဘဲ TikTok ဆော့ကြတုန်းက😄', color: '#5D3584'},
       {src: 'background.jpg', text: 'မောင်မောင့် fav photo မပါမဖြစ်လေး💗', color: '#5D3584'},
 
       {src: '3photo.jpg', text: 'သဲသဲလုပ်တဲ့ဟာလေးတွေ\nအရမ်းလှ💓', color: '#5D3584'},
       {src: '5photo.jpg', text: 'မောင်တို့ရဲ့ first date တုန်းက \nmy dayသဲကိုယ်တိုင်တင်ပေးတာ🤭🤭', color: '#5D3584'},
       {src: '8photo.jpg', text: 'ဟွန့် လုပ်ပြတာလို့တော့ပြောတာပဲ😑', color: '#5D3584'},    
       {src: '14photo.jpg', text: 'မောင်တို့ရဲ့ပထမဆုံးအလှူ🥳', color: '#5D3584'},
       {src: '15photo.jpg', text: 'တစ်လမ်းလုံးအိပ် \n အိပ်ပုတ်လေးဗျာ🫠\nအဲ့‌တုန်းက မောင့်မှာ သဲကို ဂုတ်နာမှာစိုးလို့ \nမောင်လက်ကိုတောင့်ထားရတာ ကားယိမ်းတိုင်း လိုက်မယိမ်းအောင်လို့😮‍💨', color: '#5D3584'},
       
       {src: '17photo.jpg', text: 'စလိုက်တုန်း ကတည်းက ခုချိန်ထိ မောင့်ကိုအကြိမ်ကြိမ်ကျရှုံးစေတဲ့ တစ်ခုတည်းသော မျက်ဝန်းလှလှပေါ့💗💝', color: '#5D3584'},
       {src: '18photo.jpg', text: 'ဒါလေးကလှလို', color: '#5D3584'},
       {src: '18.1photo.jpg', text: 'မောင်မောင့်သဲလေးပူစီဖောင်းတွေနဲ့ကစားနေတာချစ်ဖို့ကောင်းတယ် 😻', color: '#5D3584'},
       {src: '19photo.jpg', text: 'မောင်မောင့်သဲသဲပထမဆုရှင်လေး🥳', color: '#5D3584'},
       {src: '20photo.jpg', text: 'ကြည့်နေတာလေးကဖက်နမ်းပစ်ချင်စရာ😚', color: '#5D3584'},
       {src: '21photo.jpg', text: 'အရူးမလေး🤭🤭', color: '#5D3584'},
       {src: '22photo.jpg', text: 'ဒါကျရွာသူမလေး😄😄', color: '#5D3584'},
               
       {src: '25photo.jpg', text: 'ဒါကတော့ နွားကျောင်းသူလေး 🐮🐮', color: '#5D3584'},
       {src: '32photo.jpg', text: 'ကျောင်းဝတ်စုံပြည့်လေးနဲ့ မမပိုင်မှုး ရဲ့ snap 😅', color: '#5D3584'},
       {src: '26photo.jpg', text: 'ဒီ post ကတော့ မြတ်ပိုင်မှုးရဲ့ signature 🫶🫶', color: '#5D3584'},
       {src: '30photo.jpg', text: 'သဘာဝအတိုင်းလေးလည်းအရမ်းလှ', color: '#5D3584'},
       {src: '28photo.jpg', text: 'အဲ့ဆံပင်လေးတွေပြန်လိုချင်😢', color: '#5D3584'},
       {src: '31photo.jpg', text: 'မောင်မောင့်အကြိုက်ဆုံး မောင့်မောင့် fav photo  foxy eye လေး💖', color: '#5D3584'},
       
 
       {src: '11photo.jpg', text: 'တော်ကီတွေပစ်😌', color: '#5D3584'},
       {src: '12photo.jpg', text: 'ဒါကျ သူပစ် ကိုယ်ပစ် ဟဲဟဲ😮‍💨', color: '#5D3584'},
       {src: '13photo.jpg', text: 'တတ်သမျှ မှတ်သမျှ ထုတ်ပြီးတော်ကီပစ်🥹', color: '#5D3584'},
    ];
 
    const memoryGallery = document.getElementById('memoryGallery');
    memories.forEach(memory => {
       const imgElement = document.createElement('img');
       imgElement.src = memory.src;
       imgElement.alt = 'Memory Photo';
 
       const textElement = document.createElement('p');
       textElement.textContent = memory.text;
       textElement.style.color = memory.color;
 
       const memoryElement = document.createElement('div');
       memoryElement.appendChild(imgElement);
       memoryElement.appendChild(textElement);
 
       memoryGallery.appendChild(memoryElement);
    });
 
 
  
    

    const loveMessage = [
        "        Happy Valentine's Day , my pookie... မောင်တို့ဆိုးတူကောင်းတူဖြတ်သန်းလာတာတစ်နှစ်တောင်ရှိတော့မယ်နော်💖💓 မောင်အပေါ်အမြဲချစ်ပေးပြီးသည်းခံပေးတဲ့အတွက်ကျေးဇူးပါနော်💝🩷 မောင့်ကိုလည်းပိုပိုချစ်ပေးပါဦးနော်💗💖",
        "မောင်တို့ပြဿနာတွေအများကြီးဖြစ်ခဲ့ကြတယ်။ ဖြစ်တိုင်းလည်း တစ်ယောက်မျက်နှာတစ်ယောက်မြင်ရင် ကျေအေးနိုင်ကြတာပဲ။",
        "မောင်သဲနဲ့စတွဲတဲ့နေ့ကစပြီး သဲပေါ်ထားတဲ့အချစ်တွေက တစ်နေ့ပြီးတစ်နေ့တိုးလာတယ်။ သဲထင်တာထက် သဲတွေး‌ထားတာထက် မောင်ကသဲကိုအများကြီးပိုချစ်တယ်",
        "သဲကမောင့်ဘဝအတွက် မောလာတိုင်းအပန်းဖြေလိုရတဲ့ Oasis လေးဆိုလည်းဟုတ်တယ်\n မောင်အခက်အခဲကြုံတိုင်း အကြံဉာဏ်ကောင်းတွေပေးတတ်တဲ့ အတိုင်ပင်ခံ လေးဆိုလည်းဟုတ်တယ်\n မောင့်ဘက်ကအမြဲရပ်တည်ပေးတတ်တဲ့ အဖိုးတန် ကောင်မလေး\n မောင့်ကိုနွေးထွေးမှု လုံခြုံမှု ပေးနိုင်တဲ့ တစ်ဦးတည်းသော သူစိမ်းမိန်ကလေးပါပဲ\n သဲဟာ မောင့်ဘဝရဲ့ အရာရာ ပါပဲ.",
        "မောင်မှာအရင်တုန်းကအချစ်နဲ့ပတ်သက်ပြီးကန့်သတ်ချက်တွေ ခံယူချက်တွေရှိခဲ့တယ်..... သူများတွေမောင့်ခံယူချက်တွေနဲ့ မညီတဲ့ခါ ငါ့အလှည့်ကျရင်လို့ ကျိမ်းလေ့ရှိတယ်... မကြာပါဘူး မောင့်ကျိမ်းထားတဲ့အရာတွေကိုလုပ်ပြလို့ရမယ့်အချိန်ရောက်လာခဲ့တယ်.....  ဒါပေမဲ့ မောင်ဟာ သဲရဲ့ အပြောတွေ အကြည့်တွေ အချော့အမြူ တွေ နဲ့ မျက်ဝန်းတစ်စုံအောက်မှာပဲ အကြိမ်ကြိမ်ကျရှုံးခဲ့ရတယ်",
        "ဘာပဲဖြစ်ဖြစ် မောင်သဲအနားမှာအမြဲရှိနေပေးမှာပါ\nမောင် သဲကို ပိုချစ် ပိုဂရုစိုက် ပိုအလေးထား ပါ့မယ်...နေ့ရက်တိုင်းမှာသဲနဲ့အတူ ပျော်စရာတွေဖန်တီးချင်တယ်.....\nသဲကအရမ်းလှတဲ့သူမို့ insecure ဖြစ်တာလေးလျော့နော်\nမောင့်ဘဝမှာ အရေးပါတဲ့လူတစ်ယောက်အနေနဲ့ရှိနေပေးလို့..အခက်အခဲကြုံတိုင်း အကြံဉာဏ်ကောင်း‌တွေနဲ့ လမ်းပြပေးလို့..ဘာတွေပဲအဆင်မပြေဖြစ်နေနေ မောင့်ကိုစိတ်သက်သာရာရအောင် အမြဲဖေးမပေးလို့\nဘယ်တော့မှမပြောင်းလဲပဲချစ်ပေးသွားပါ့မယ်💖\nကျန်းမာရေးလည်းဂရုစိုက်နော်",
        "ကလေးဆန်တာလေးတွေးလည်းလျော့နော်",
        "မောင့်စကားလေးတွေကိုလည်း နားထောင်နော်",
        "ပြောချင်တာတွေ \nမှာချင်တာတွေ\n ပြီးပြီဆိုတော့လက်ဆောင်ကိစ္စပြောမယ်\nပန်းကတော့သဲကြိုက်လောက်မယ့် ခရမ်းရောင်လေး မြင်တာနဲ့အရမ်းပေးချင်သွားလို\nမောင်အစက သဲလိုချင်တဲ့ ဝက်ဝံရုပ်‌ဝယ်ပေးမလို့ပါ လိမ္မော်ရောင်လေးလေအဲ့ဒါက size က‌တော့ကြီးတယ်ဈေးကလည်း deli ခရောဆို ၅သောင်းပဲ ဒါပေမဲ့ မြင်လည်းမမြင်ရတော့ quality မကောင်းမှာစိုးလို့  အဲ့အရုပ်တွေက ကြာရင်မာသွားတာဖက်မကောင်းတော့ဘူးခုအရုပ်ကတော့ miniso ကဆို‌တော့တော်တော်ကောင်းပြီးဈေးကြီးတော့ အရမ်းကြီးတာကြီးတော့မရဘူးပေါ့ quality ကတော့သဲကိုင်ကြည့်ရုံနဲ့သိသာပါတယ် မာလည်းမသွားဘူးပြောတယ် \nမောင်ရွေးချယ်မှုတွေကသဲနဲ့မတူတတ်ပေမဲ့ ဒါလေးတော့သဲကြိုက်မယ်လို့    မောင် မျှော်လင့်ပါတယ်",
        "💖💝💗Happy Valentine's Day ပါအူကြူးရေ.....အရမ်းချစ်တယ်💗💝💖"

    ];

    document.getElementById("loveLetter").innerText = loveMessage.join("\n\n");
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active'); // Hide all sections
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active'); // Show the selected section

        if (sectionId === 'together') {
            setInterval(updateCounter, 1000);
            updateCounter();
        }
    }
}
