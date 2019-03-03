import strIndexesOf from 'str-indexes-of'

export class Dictionary {

  private static stripAllNonLetters_ExceptCommaAndSpace(str: string): string {
    return str.replace(/[^A-Za-z0-9\u0600-\u06FF\s\,\\]/g, '')
  }

  private static stripAllNonLetters_ExceptSpace(str: string): string {
    return str.replace(/[^A-Za-z0-9\u0600-\u06FF\s\\]/g, '')
  }

  // Load the Dictionary
  static load() {
    Dictionary.dictionary = Dictionary.dictionary.replace(/\n/g, ',').replace(/\s*,\s*/g, ',')
    Dictionary.dictionary = Dictionary.stripAllNonLetters_ExceptCommaAndSpace(Dictionary.dictionary.toLowerCase())
  }

  // Get an Arabic word
  static getArabic(english: string): Array<string> | undefined {
    english = Dictionary.stripAllNonLetters_ExceptSpace(english.toLowerCase())
    let word = `,${english},`
    let startWordsArray: Array<number> = strIndexesOf(Dictionary.dictionary, word)
    if (startWordsArray.length == 0) return undefined
    let wordsArray: Array<string> = []
    startWordsArray.forEach(startWord => {
      let comma = startWord + word.length
      let end = Dictionary.dictionary.indexOf(',', comma + 1)
      wordsArray.push(Dictionary.dictionary.slice(comma, end))
    })
    return wordsArray
  }

  private static dictionary = `
  1,واحد
2,اثنين
3,ثلاثة
4,أربعة
5,خمسة
6,ستة
7,سبعة
8,ثمانية
9,تسعة
10,عشرة
11,أحد عشر
12,اثني عشر
13,ثلاثة عشر
14,أربعة عشر
15,خمسة عشر
16,ستة عشر
17,سبعة عشر
18,ثمانية عشر
19,تسعة عشر
20,عشرون
21,واحد و عشرون
22,إثنان و عشرون
23,ثلاثة و عشرون
24,أربعة و عشرون
25,خمسة و عشرون
26,ستة و عشرون
27,سبعة و عشرون
28,ثمانية و عشرون
29,تسعة و عشرون
30,ثلاثون
40,أربعون
50,خمسون
60,ستون
70,سبعون
80,ثمانون
90,تسعون
100,مئة
1000,ألف
accountant,محاسب
Additional,إضافي
address,عنوان
age,عمر
airport,مطار
all,كل 
almost,تقريبا
Annoying,مزعج
apartment,شقة
apartment,شَقـَّة
Apple,تفاحة
arabic,العربيّة
are,هـَلْ 
area,منطقة
Artificial,صناعي
ATM,صرّاف آليّ
aunt,عمة
aunt,خالة
Bad,سيء
Balcony,شرفة
bald,أصلع
bank,مصرف
bathroom,حمام
beard,لحية
beautiful,جميل
Bed,سرير
bedroom,غرفة نوم
Bedroom,غرفة نوم
beef,لحم بقر
behind,خلف
beside,بـِجانِـبْ
big,كبير
big,كبير
black,أسود
blackboard,سبورة
blond,أشقر
blue,أزرق
Board,سبورة
book,كِتاب
book shelves,خَزانَة كُتـُبْ
books,كُتُب
bookshelf,رف الكتب
boy,ولد
boys,أولاد
brother,أخ
brown,بني
building,مبنى
buildings,مباني
cabinet,خَزانَة
café,مقهى
can you help me,هل تستطيع مساعدتي
carpet,سجادة
ceiling,سقف
Ceramic,سيراميك
chair,كرسي
chairs,كراسي
Cheap,رخيص
check,حساب
check in,الوصول
check out,المغادرة
chicken,لحم دجاج
child,طفل
children,أطفال
city,مدينة
Class,فصل
classroom,صف
classroom,فصل
clothes,مَلابـِسْ
coat,معطف
coffee,قهوة
The coffee,القهوة
color,لون
colors,ألوان
come in,تفضل
Comfortable,مريح
Computer,حاسوب
consists of,يتكون من
Cooking,الطبخ
couch,أريكة
cousin,أبن العم
cousin,أبن العمة
cousin,أبن الخال
cousin,أبن الخالة
credit card,بطاقة ائتمان
cup,كوب
curly,مجعد
Curtain,ستارة
Dark,غامق
daughter,إبنة
day,يَوْمْ
days,أيَّامْ
describe,صف
describing,وصف
Design,تصميم
desk,مكتب
desk,مكتب
dictionary,قاموس
Difficult,صعب
Dining Table,طاولة طعام
dinner,طعام العشاء
Dinning Room,غرفة الطعام
direction,إتّجاه
Dishwasher,جلاية
do,هل
Doctor,طبيب
door,باب
doors,أبواب
each,كل
Easy,سهل
Egypt,مصر
eight,ثمانية
Electrical,كهربائي
Electronic,الكتروني
english,الإنجليزيّة
every,كل 
excuse me,عذراً
Expensive,غالي
Expensive,غالي
eyes,عـِيـُونْ
face,وجه
family,عائلة
family name,أسم العائلة
Fan,مَروَحة
fast,سريع
fat,بدين
fifth,خامِسْ 
file,ملف
first,أوَّلْ 
first name,الإسم ا لأول
five,خمسة
flag,علم
floor,طابق
flooring,أرضية
floors,طوابق
Food,طعام
four,أربعة
fourth,رابـِعْ 
Friday,الجمعة
Fridge,ثلاجة
Friend,صديق
from,من
from,من
front,أمام
Fruitful,مثمر
Garage,مرآب
garden,حديقة
generous,كريم
girl,بنت
girls,بنات
Glass,زجاج
go ahead,تفضل
go up,إصعدْ
good,حسن
good,جيد
good evening,مساء الخير
good morning,صباح الخير
goodbye,مع السّلامة
grandfather,جد
grandmother,جدة
green,أخضر
green,أخضر
grey,رمادي
Guest,ضيف
Guests Room,غرفة الضيوف
hair,شَعْرْ
Hall way,ممر
handsome,وسيم
happy,سعيد
hat,قبّعة
have,لدى
he,هو
he has,عنده
heavy,ثقيل
hello,مرحباً
hello,مرحباً
help,مساعَدة
here,هنا
home,منزل
Home,بيت
hospital,مستشفى
Hospital,مستشفى
hotel,فندق
hour,ساعة
house,بيت
House,منزل
how,كيف
how,كَيْفَ
how are you,كيف حالكَ
how are you,كيف حالك 
how many,كم
how much,كم
how old are you,كم عمركَ
hungry,جوعان
husband,زوج
I,أنا
I am American,أنا أمريكيّ
I am fine,أنا بخير
I can't write,لا أكتب
I cant read,لا أقرأ
I do not speak,لا أتكلم
I don't know,لا أعرف
I go,أذهب
I have,عندي
I have,عندي
I invite you,أدعوك
I live,أسكن
I need help,أحتاج مساعدة
I speak,أتكلّم
I walk,أمشي
I work,أعمل
I would like,أودّ
I'm sorry,آسف
in,في
inside,داخل
invitation,دعوة
Iraq,العراق
Iron,حديدة
it hurts,يؤلمني
job,عمل
just looking,أتفرّج فقط
Kitchen,مطبخ
Lake,بحيرة
Land,أرض
last,ماضي
Laundry Room,غرفة الغسيل
lawyer,محامي
Lebanon,لبنان
left,يسار
left,يَسار
Lemon,ليمونة
lesson,دَرْسْ
Library,مكتبة
light,خفيف
Light,فاتح
light,ضوء
like,مثل
Line,خط
lines,خطوط
Little,قليل
Living,السكن
Living / sitting room,غرفة جلوس
living room,غرفة الجلوس
lobby,بهو
long,طويل
long,طويل
loud,مرتفع الصّوت
Made of,مصنوع من
main,رئيسي
man,رجل
Manager,مدير
many,كثير
map,خريطة
market,سوق
married,متزوج
Master bathroom,حمام رئيسي
Master Bedroom,غرفة نوم رئيسية
Mattress,فرشة
meat,لحم
Medium,متوسط
Meeting,اللقاء
men,رجال
Microwave,مايكروويف
middle,وَسَطْ
minute,دقيقة
Mirror,مرآة
Monday,الإثنين
money,نقود
month,شَهْرْ
months,أشْهُرْ
Mosque,مسجد
Mosque,جامع
Mountain,جبل
mouth,فم
museum,متحف
my age,عمري
my name,إسمي
my name is,إِسمي
narrow,ضيق
Natural ,طبيعي
new,حَديث
next,قادم
next,تالي
nice meeting you,فرصة سعيدة
nice to meet you,فرصة سعيدة
nine,تسعة
no,لا
noon,ظهر
nose,أنف
notebook,دفتر
now,الآن
number,عدد
number,رقم
nurse,مُمَرِّضْ
of,من
Office,مكتب
officer,ضابط
old,عجوز
Big,كبير
on,على
on it,عليه
one,واحد
only,فقط
Opened to,مفتوح على
or,أو
orange,برتقالي
Orange,برتقالة
other,آخر
others,آخرون
Oven,فرن
Overlooking,مطل على
parents,والدين
parking lot,موقف سيارات
party,حفلة
party,حَفـْلْ 
passport,جواز سفر
past,ماضي
peace be upon you,السلام عليكم
Pen,قَلَم
Perfume,عطر
Person,شخص
pharmacist,صيدلي
Pharmacy,صيدلية
picture,صورة
place,مكان
places,الأماكن
please,من فضلَك
poor,فقير
Practical,عملي
Preparing,التحضير
price,ثمن 
Price,سعر
questions,الأسئلة
quiet,هادئ
rank,رتبة
rate,سعر
Rectangular,مستطيل
red,أحمر
reservation,حجز
restaurant,مطعم
Restaurant,مَطعَم
rich,غني
right,يمين
right,يمين
room,غرفة
room,غُرفة
rooms,غُرُف
Round,مستدير
sad,حزين
Saturday,السبت
Saudi Arabia,السعودية
school,مَدرَسة
School,مَدرسة
scientist,عالِمْ
Seat,مقعد
second,ثانِي 
secretary,سكرتيرة
see you,إلى اللقاء
seven,سبعة
several,عدة
Shampoo,شامبو
shape,شكل
shaver,أداة حلاقة
she,هي
she has,عندها
Shelf,رف
shoes,أحذية
short,قصير
short,قصير
Shower ,دش
sibling,أخوة
sick,مريض
since when,مـُنذُ مَتَى
Sink,مغسلة
sister,أخت
sister,شقيقة
sisters,اخوات
six,ستّة
size,مقاس
size,حجم
slow,بطيء
small,صغير
small,صغير
smart,ذكي
Social Security,الضمان الإجتماعي
Sofa,كنبة
soldier,جندي
Soldier,جندي
some,بعض 
son,إبن
Square,مربع
staircase,درج
stairs,سّلّم
star,نجمة
stars,نجوم
state,ولاية
state,ولاية
states,ولايات
station,محطة
Steel,ستيل
storage,خَزانَة
street,شارع
Street,شارع
Street,شارع
streets,شوارع
student,طالب
students,طُلاب
stupid,غبي
Sudan,السودان
Sunday,الأحد
Supervisor,مشرف
Syria,سوريا
table,طاولة
table,طاولة
tables,طاولات
tall,طويل 
tall,طويل
taxi,تاكسي
tea,شاي
teacher,مدرس
temperature,درجة الحرارة
ten,عشرة
thank God,الحمد للَه
thank you,شكراً
the left,اليسار
the right,اليمين
The United States of America,الولايات المتحدة الامريكية
the weather forecast,توقّعات الطّقس
there,يوجد
they,هم
they have,عندهم
thin,نحيف
thing,شئء
third,ثالِثْ 
this,هذا
those,ذلك 
three,ثلاثة
Thursday,الخميس
The time,الساعة
to,إلى
to allow,سمحَ
to be,كان
to be able,إستطاع
to be born,وُلِد
to buy,شراء
to celebrate,إحْتـَفـَلَ
to do,عملَ
to drink,شَرِبَ
to eat,أكلَ
to enter,دخلَ
to exit,خَرَجَ
to find,وجدَ
to go,الذهاب
to happen,حَدَثَ
to identify,عرَّفَ
to introduce,دَرَّسَ
to invite,دعى
to know,عرف
to know,عَرِفَ
to lead,قاد
to live,سكن
to marry,تزوّجَ
to measure,قاس
to meet,التقى
to need,احتاج
to need,إحْتاجَ
to perform,قام 
to prefer,فـَضَّلَ
to read,قرأ
to say,قال
to see,رأى
to sit,جلس
to sleep,نام
to study,دَرَسَ
to take,اخذ
to teach,دَرَّسَ
to tell,حدّث
to tell,أخبرَ
to visit,زار
to visit,زار
to want,أرادَ
to wear,أرتدى
to work,عملَ
to write,كتب
today,اليوم
tomorrow,غداً
tomorrow,غداً
tool,أداة
Tooth paste,معجون أسنان
Traditional,تقليدي
train,قطار
Tree,شجرة
Tree,شجرة
Tuesday,الثّلاثاء
turn,دُرْ
turn,دُرْ
turn left,دُرْ إلى اليسار
turn right,دُرْ إلى اليمين
TV,تليفيزيون
two,إثنان
ugly,قبيح
uncle,عم
uncle,خال
united states,الولايات المتّحدة
View,منظر
View,منظر
violet,بنفسجي
visit,زيارة
walking,السير
Wall,حائط
Wall,جدار
was born,وُلِدَ
water,ماء
we,نحن
we have,عندنا
weather,طقس
wedding,زواج
Wednesday,الأربعاء
week,أسبوع
weeks,أسابـِيعْ
welcome,أهلا و سهلا
what, ماذا / ما
what,ماذا
what is,ما هو
what is your name,ما إسمكَ
What is your full name, ما إسمك بالكامل
what time is it,كم الساعة
where,أين
where from,مِنْ أيْـنَ
which,أيْ
white,أبيض
who,مـَنْ
why,لماذا
wide,واسع
wife,زوجة
window,شباك
window,نافذة
with peace,مع السلامة
with pleasure,بكل سرور
woman,إمرأة
woman,إمرأة
Wood,خشب
work,عمل
year,سَنَة
years,سَنَواتْ
yellow,أصفر
Yemen,اليمن
yes,نعم
yes,نعم
yesterday,أمس
you,أنت
you accept,تقبلون
you have,عندك
you translate,تُترجم
young,صغير
young,شاب
your full name,إسمك بالكامل
your name,إسمك
name,أسم
My full name, إسمي بالكامل
Where are you from,من اين انت
is,هو
Originally,أصلا
Origin,الأصل
Location,مَوْقِعْ
Locations,مَواقِعْ
Originally from,أصلا من
I am,انا
The,ال
And,و
When,متى
Were,كان
Were you born,ولدت
I was born,ولدت
Where did you grow up,أين نشأت
grew up, نشأ
grow up, نشأ
I grew up,نشأت
But,ولكن
1982,  الف وتسعمائة واثنان وثمانون
Where did you work,أين عملت
Before,قبل
The army,الجيش
I worked,عملت
Cashier,أمين الصندوق
Company,شركة
The company,الشركة
Companies,شركات
For,ل
I was,كنت
Also,أيضا
College,جامعة
University,جامعة
During,خلال
That,هذه
This,هذه
Time,وقت
Free time,وقت فراغ
I studied,درست
Computers,حواسيب
Computer,حاسوب
However,مع ذلك
I did not graduate,لم أتخرج
I did not obtain,لم أحصل على
I did not get,لم أحصل على
Diploma,شهادة
Did you join,إلتحقت ب
Did you join the army,إلتحقت بالجيش
I joined the army,إلتحقت بالجيش
I joined,إلتحقت ب
American,أمريكي
Army,جيش
After,بعد
2005,ألفين وخمسة
my rank,رتبتي
Currently,حاليا
sergeant,رقيب
First class,درجة أولى
My specialty,تخصصي
Specialty,تخصص
Weapons,أسلحة
Weapon,سلاح
The special forces,القوات الخاصة
Special forces,القوات الخاصة
Forces,قوات
Special,خاص
The forces,القوات
Life,حياة
did you do,فعلت
Will you do,ستفعل
did you move,أنتقلت
I moved,أنتقلت
do you live,تسكن
2013,ألفان وثلاثة عشر
2018,ألفين وثمانية عشر
My wife,زوجتي
With,مع
I’m,أنا
Since,منذ
we have no,ليس لدينا
We don’t have,ليس لدينا
I have no,ليس عندي
I don’t have,ليس عندي
My wife’s name,اسم زوجتي
Her age,عمرها
31 years,واحد وثلاثون سنة
2 years,سنتان
her job,عملها
She sells houses,تبيع منازل
Retirement,تقاعد
You retire,تتقاعد
I will retire,سأتقاعد
I retired,تقاعدت
He retired,تقاعد
she retired,تقاعدت
you live,تسكن
Will,سوف
I will work,سأعمل
Military advisor,مستشار عسكري
I want,أريد
Close,قريب
Beach,شاطئ
They live, يسكنون
Your parents,والديك
My parents,والدي
My dad,ابي
His name,أسمه
my mom,أمي
her name,اسمها
Retired,متقاعد
One brother,أخ واحد
Two younger sisters,شقيقتان أصغر
the older sister,الاخت الكبرى
the younger sister,الأخت الصغرى
Weekend,عطلة نهاية الاسبوع
Last weekend,عطلة نهاية الاسبوع الماضي
Next weekend,عطلة نهاية الاسبوع القادمة
the weekend,عطلة نهاية الاسبوع
Do you go,تذهب
Usually,عادة
i wanted,أردت
Tell me,أخبرنى
Talk to me,تحدث معي
About yourself,عن نفسك
North Carolina,ولاية كارولينا الشمالية
one thousand,ألف
two thousand,ألفين
Our child,طفلنا
our son,ابننا
our boy,ولدنا
Your age,عمرك
Athletic,رياضي
Same,نفسه
the summer,الصيف
Summer,صيف
Season,فصل
my son,ابني
His name,أسمه
Because,لان
Defend,دافع
my country,بلدي
Country,بلد
My speciality,تخصصي
my hometown,مسقط رأسي
My home town,مسقط رأسي
What did you do,ماذا فعلت
For a period,لمدة
Period,مدة
November,تشرين الثاني
I will return,سوف اعود
Your retirement,تقاعدك
i will build,سوف نبني
Real estate,عقارات
Brothers,اخوان
Any,أي
Large,كبير
the weather,الطقس
Sunny,مشمس
windy,عاصف
Stormy,عاصف
Cold,بارد
i wore,ارتديت
The temperature high,درجات الحراره الكبرى
The temperature low,درجات الحراره الأصغرى
Low,منخفضة
approximately,تقريبا
fahrenheit,فهرنهايت
degrees fahrenheit,درجة فهرنهايت
humidity percentage,نسبة الرطوبة
Moderate,معتدل
Around,حول
Fifty,خمسون
Percent,بالمئة
Wind,رياح
Speed,سرعة
Miles per hour,ميل في الساعة
Winds,الرياح
About,حول
About,حوالي
North,شمال
Favorite,مفضل
Your favorite hobby,هوايتك المفضلة
My favorite hobby,هوايتي المفضلة
Hobby,هواية
in detail,بالتفصيل
Detail,تفاصيل
Jogging,الركض
Running,الركض
i wear,ارتدي
i wear,ألبس
do you have,هل لديك
If,إذا
i drive,أقود
Gym,مركز رياضي
the gym,النادي الرياضي
i run,أركض
i jog,أركض
It,هو
Not good,ليست جيدة
I will run,سوف أركض
i practice,أتدرب
Everyday,كل يوم
Not,ليس
My hobby,وهوايتي
Outside,خارج
The outside,الخارج
You Prefer,تفضل
i prefer,أفضل
i need,احتاج
Practice,ممارسة
your hobby,هوايتك
Clothing,ملابس
Whom,من
Run,ركض
Jog,ركض
you need,تحتاج
the morning,الصباح
Morning,صباح
Activity,نشاط
Activities,أنشطة
Your free time,وقت فراغك
my free time,وقت فراغي
My job,عملي
By myself,بنفسي
Times,مرات
Equipment,معدات
I use,أستخدم
You use,تستخدم
Often,غالبا
Internal,داخلي
External,خارجي
Indoors,داخلي
Outdoors,خارجي
Does,هل
Affect,تؤثر
Another,آخر
Maybe,ربما
Reading,قراءة
When was,متى كان
The last time,آخر مرة
You practiced,تدربت
You trained,تدربت
i trained,تدربت
i practiced,مارست
Hobbies,هوايات
The practice,الممارسة
One hundred,مائة
Nine hundred,تسعمائة
twenty,عشرون
thirty,ثلاثون
Eighteen,الثامنة عشر
Eighty,ثمانون
Eighty two,اثنان وثمانون
sixteen,السادس عشر
My son’s name,اسم ابني
his age,عمره
Thirty two,اثنان و ثلاثون
our only child,طفلنا الوحيد
Twenty fifth,خمسة و عشرون
As a,ك
What did you work,ماذا عملت
Sixty,ستون
i spent time,قضيت الوقت
We visited,زرنا
the parking lot,موقف السيارات
Parking lot,موقف السيارات
Park,حديقة
The park,الحديقة
the middle,الوسط
Town,مدينة
We will eat,سوف نأكل
We ate,أكلنا
i stayed,بقيت
you celebrated,احتفلت
I celebrated,احتفلت
we celebrated,احتفلنا
Christmas,عيد الميلاد
my home,منزلي
your house,منزلك
your work,عملك
Test,امتحان
i will take,ساخذ
my family,أسرتي
Our restaurant,مطعمنا
i will not study,لن ادرس
Far,بعيد
Fifteen,خمسة عشر
Miles,اميال
I will spend,سأقضي
At,في
My baby,طفلي
our baby,طفلنا
Distance,مسافة
My house,بيتي
My work,عملى
What do,ماذا
You plan,تخطط
i plan,أخطط
That,أن
your daily schedule,جدولك اليومي
Until,حتى
Evening,مساء
i wake up,استيقظت
Seven o’clock,الساعة السابعة
Then,ثم
i return,أعود
I care,أهتم
For my personal hygiene,لنظافة الشخصية
I eat,آكل
Breakfast,وجبة الفطور
i wear,ارتدي
My military suit,بدلتي العسكرية
Twelve o’clock,اثنا عشر
Lunch,غداء
Afternoon,بعد الظهر
Five o’clock,الساعة الخامسة
i play,ألعب
We watch,نشاهد
Nine o’clock,الساعة التاسعة
Night,ليل
Located,تقع
i bought,اشتريت
Previous,سابق
Near,قريب
Fort Bragg,قاعدة براج
Small front garden,حديقة أمامية صغيرة
the front door,الباب الأمامي
the main door,الباب الرئيسي
Contains,يحتوي على
i enter, أدخل
You enter,تدخل
you will see,سترى
Television,التلفاز
Devices,الأجهزة
Wooden,خشبي
Two cars,سيارتان
Two floors,طابقين
When,عندما
original,أصلي
originally,أصلا
my city of origin,مدينتي الأصلية
Your city of origin,مدينتك الأصلية
Was established,تاسست
I believe,اعتقد
i think,اعتقد
The economy,الاقتصاد
Depends,
Source,مصدر
Camp,معسكر
farms,مزارع
Farm,مزرعة
the military,الجيش
Military,الجيش
For me,لي
The center,المركز
South,جنوب
Hundred,مائة
Eight hundred,ثمان مائة
One hundred thousand,مئة الف
Person,شخص
Winter,شتاء
Cloudy,غائم
River,نهر
Famous for,مشهورة ب
The population,عدد السكان
Describe,صف
Areas,مناطق
The main areas,المناطق الرئيسية
Hot,حار
You traveled,سافرت
You travel, تسافر
Tourism,السياحة
The Middle East,الشرق الأوسط
Middle East,الشرق الأوسط
countries,بلدان
Cities,مدن
You visited,زرت
Your trips,رحلاتك
Surrounding,يحيط
I visited,زرت
Ancient historical,التاريخية القديمة
ancient,عتيق
historical,تاريخي
archaeological,أثري
You stayed,بقيت
Did,هل
Have,هل
Did,كان
Neighboring,مجاور
I traveled,سافرت
i stayed,سافرت
Your visit,زيارتك
Was,كان
The best thing,أفضل شيء
These,هذه
Old,قديم
Entrance,مدخل
Small waiting area,منطقة انتظار صغيرة
Reception desk,مكتب الاستقبال
Contains,يحتوي على
Televisions,تلفازات
Television,تلفاز
rice,أرز
beef,لحم بقر
chicken,دجاج
peppers,فلفل
Onions,بصل
My resturant,مطعمى
your resturant,مطعمك
resturant,مطعم
back,خلف
level,طابق
hall,قاعة
walls,جدران
pictures,صور
type,نوع
Mexican,مكسيكي
My meal,وجبتي
My favorite meal,وجبتي المفضله
economic,اقتصادي
Tires,طارات
tire,إطار
doors,أبواب
engine,محرك
seat,مقعد
seats,مقاعد
it was,كانت
She has,لديها
She works,تعمل
Truck,شاحنة
`
}