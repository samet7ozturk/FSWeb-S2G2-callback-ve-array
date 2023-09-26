const { fifaData } = require("./fifa.js");

/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

// Finali ve yılı karşılaştırıp finalmatch fonksiyonuna atıyor
const finalMatches = fifaData.filter(
  (match) => match.Stage === "Final" && match.Year === 2014
);

// Eğer final maçları bulunuyorsa, ilk final maçının ev sahibi takımını yazdıran if koşulu
if (finalMatches.length > 0) {
  const finalMatch = finalMatches[0];
  console.log(
    "2014 Dünya Kupası Finali Ev Sahibi Takımı:",
    finalMatch["Home Team Name"]
  );
} else {
  console.log("2014 Dünya Kupası Finali Bulunamadı.");
}

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

const finalMatches2 = fifaData.filter(
  (match) => match.Stage === "Final" && match.Year === 2014
);

if (finalMatches2.length > 0) {
  const finalMatch = finalMatches2[0];
  console.log(
    "2014 Dünya Kupası Finali Deplasman Takımı:",
    finalMatch["Away Team Name"]
  );
} else {
  console.log("2014 Dünya Kupası Finali Bulunamadı.");
}

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)

const finalMatches3 = fifaData.filter(
  (match) => match.Stage === "Final" && match.Year === 2014
);

if (finalMatches3.length > 0) {
  const finalMatch = finalMatches3[0];
  console.log("Ev sahibi takımın gol sayısı:", finalMatch["Home Team Goals"]);
} else {
  console.log("2014 Dünya Kupası Finali Bulunamadı.");
}

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)

const finalMatches4 = fifaData.filter(
  (match) => match.Stage === "Final" && match.Year === 2014
);

if (finalMatches4.length > 0) {
  const finalMatch = finalMatches4[0];
  console.log("Deplasman takımının gol sayısı:", finalMatch["Away Team Goals"]);
} else {
  console.log("2014 Dünya Kupası Finali Bulunamadı.");
}

//(e) 2014 Dünya kupası finali kazananı*/

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(fifaData) {
  const finalMatches = fifaData.filter((match) => match.Stage === "Final");
  return finalMatches;
}
console.log("Görev 2: ", Finaller(fifaData));

//console.log("Görev : 2", Finaller(fifaData));
/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(fifaData, Finaller) {
  const finalMatches = Finaller(fifaData);
  const years = finalMatches.map((match) => match.Year);
  return years;
}
console.log("Görev 3: ", Yillar(fifaData, Finaller));

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(fifaData, Finaller) {
  const kazananlar = [];

  for (const mac of Finaller(fifaData)) {
    if (mac["Home Team Goals"] > mac["Away Team Goals"]) {
      kazananlar.push(mac["Home Team Name"]);
    } else if (mac["Home Team Goals"] < mac["Away Team Goals"]) {
      kazananlar.push(mac["Away Team Name"]);
    }
  }
  return kazananlar;
}
console.log("Görev 4: ", Kazananlar(fifaData, Finaller));

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(fifaData, Finaller, Yillar, Kazananlar) {
  const finaller = Finaller(fifaData);
  const yillar = Yillar(fifaData, Finaller);
  const kazananlar = Kazananlar(fifaData, Finaller);
  const sonuclar = [];
  for (let i = 0; i < yillar.length; i++) {
    const sonuc = `${yillar[i]} yılında, ${kazananlar[i]} dünya kupasını kazandı!`;
    sonuclar.push(sonuc);
  }
  return sonuclar;
}
console.log(
  "Görev 5: ",
  YillaraGoreKazananlar(fifaData, Finaller, Yillar, Kazananlar)
);

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(Finaller) {
  const toplamGoller = Finaller.reduce((toplam, match) => {
    const evSahibiGol = match["Home Team Goals"];
    const konukTakimGol = match["Away Team Goals"];
    return toplam + evSahibiGol + konukTakimGol;
  }, 0);
  const OrtalamaGolSayisi = (toplamGoller / Finaller.length).toFixed(2);
  return OrtalamaGolSayisi;
}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
