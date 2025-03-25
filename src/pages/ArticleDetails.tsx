
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articlesData } from './Articles';
import MetaTags from '../components/MetaTags';
import NotFound from './NotFound';

const ArticleDetails = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const id = parseInt(articleId || '0');
  
  const article = articlesData.find(article => article.id === id);
  
  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags />
      <div className="py-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="flex items-center text-gray-300 hover:text-gold transition-colors mb-4">
            <ArrowRight className="ml-2" size={16} />
            العودة إلى المقالات
          </Link>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {article.imageUrl && (
            <div className="w-full h-64 md:h-80 overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-navy-dark mb-4 leading-relaxed md:leading-loose">{article.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="ml-1" />
                {article.date}
                {article.hijriDate && (
                  <span className="mr-1">({article.hijriDate})</span>
                )}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="ml-1" />
                {article.readTime}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 article-content leading-relaxed">
              <p className="mb-6">الحمد لله القائل في كتابه الكريم "سبحان الذي أسرى بعبده ليلا من المسجد الحرام إلى المسجد الأقصى الذي باركنا حوله..."الإسراء1، والصلاة والسلام على أشرف المرسلين القائل في الحديث الصحيح "لا تقوم الساعة حتى يقاتل المسلمون اليهود فيقتلهم المسلمون حتى يختبئ اليهودي وراء الحجر والشجر فيقول الحجر أو الشجر: يا مسلم، يا عبد الله، هذا يهودي خلفي فتعال فاقتله، إلا الغرقد فإنه من شجر اليهود" وعلى آله وصحبه أجمعين.</p>

              <p className="mb-6">في ظل حرارة الصيف اللاهبة وانصراف الناس إلى قضاء العطل الصيفية والترفيه عن النفس بالحلال أو الحرام وفي غفلة من عموم الأمة –عامة وخاصة- إلا ما رحم ربي وفي ظل تلهية حكام الخذلان والاعتلال لشعوبهم وإغراقهم في كم هائل من الحفلات والمهرجانات في طول البلاد العربية وعرضها، على حد قول الشاعر :</p>
              <p className="text-center italic mb-6">هنا وهنالك قام المأتم * شعب يُغنّي وحاكم يترنم</p>

              <p className="mb-6">في ظل كل ذلك انعقد مؤتمر فتح السادس –حيث لا نصر ولا فتح على أرض الواقع- وبإذن مرخص من الكيان الصهيوني وتزكية من دول الاستبداد العربي وعلى رأسهم مصر والسعودية والأردن والذين تولوا تزكية محمود عباس غريم ياسر عرفات والذي فُرض عليه قسرا من قبل الإدارة الأمريكية والإسرائيلية، والذي يحظى بالدعم الدولي والعربي والإسرائيلي إنما هم ديناصورات فتح الذين بدلوا وغيروا ونكصوا على أعقابهم من أرباب المال والنفوذ والسلطة الذين يجدون الدعم في بعض العواصم العربية المتخاذلة وسر الدعم الذي يحظى به عباس وجماعته أنه يؤمن بحل الدولتين أو الحكم الذاتي المحدود ويعادي كل فصائل المقاومة الحقيقية وإن رفع في المؤتمر السادس شعارها من باب المكر والخديعة وتضليل الرأي العام واحتواء تيار المقاومة المسلحة داخل حركة فتح في الداخل والخارج إلى أن يتم المؤتمر وتعود حليمة إلى عادتها القديمة، وسوف تكشفه الأيام المقبلة بعون الله تعالى.</p>

              <p className="mb-6"><strong>ومن منا لا يتذكر خطاب الرئيس الأمريكي –أوباما- في جامعة القاهرة بتاريخ 04/06/2009 الذي أغرق جماهير المستمعين إليه بمعسول الكلام ولذيذ الأحلام ولكن قاصمة الظهر في خطابه عندما طلب من حركة حماس نبذ العنف ومتى كان جهاد ومقاومة الاستعمار عنفا في عرف أوباما السياسي؟!!!</strong> ألم تنل أمريكا استقلالها بعد 80 سنة من القتال ضد التاج البريطاني فيما يسمى بالثورة الأمريكية ألم تطرد الإسبان من كوبا بعد حرب دامت 3 سنوات من 1895 إلى 1898 فيما سمي الحرب الأمريكية الإسبانية. ألم تتوحد الولايات الشمالية والجنوبية بعد حرب أهلية طاحنة دامت 4 سنوات من 1861 إلى 1865 راح ضحيتها حوالي 600.000 قتيل فهل استخدام السلاح ضد المحتل يسمى عنفا يا أوباما؟!!! وأما فاقرة الفواقر حصره الحل للقضية الفلسطينية في الاعتراف بحل الدولتين، ولكن ما يثير الدهشة والاستغراب أن ينال هذا الخطاب الهائم ذلك الترحيب والتصفيق من أغلب المستمعين داخل القاعة وخارجها وفيهم أهل العمائم وشيوخ الأزهر، وكان الواجب الشرعي على هؤلاء العلماء قبل غيرهم إما الرّد المباشر أو الانسحاب من القاعة احتجاجا على الحل المطروح والذي يخالف الشرع أولا، والمواثيق الدولية التي تشرع مقاومة الاستعمار بكل الوسائل، أما الجلوس دون إنكار فيشمله قوله تعالى "إنكم إذا مثلهم".</p>

              <p className="mb-6"><strong>لقد أصبح ساسة الغرب والعرب ينادون في كل مناسبة بحل الدولتين ويأتي على رأس تلك الدول مصر والأردن وحتى الجزائر التي ذاقت ويلات الاستعمار يصرح وزير خارجيتها مدلسي بتاريخ 24/06/2009 "إن الجزائر مع حل الدولتين كما نادى به أوباما؟!!!</strong> فمتى كان أوباما مرجعية الجزائر في مناصرة القضايا العادلة وماذا لو أن أوباما نادى بالحكم الذاتي للصحراء الغربية، فهل ستخضع الجزائر لذلك الطرح؟!!!.</p>

              <h2 className="text-xl font-bold mb-3 mt-8">أولا: القضية الفلسطينية والسلم العالمي:</h2>
              <p className="mb-6"><strong>ما زال العقلاء وأهل البصر والبصيرة يحذرون -منذ زمن بعيد- من مغبة عدم إيجاد حل سياسي عادل وشرعي للقضية الفلسطينية العادلة ومن هؤلاء العلامة الإبراهيمي رحمه الله</strong>، حيث قال بتاريخ 21 جوان 1948: " أيها الشعب العربي المسلم، في هذه الظروف الدقيقة التي تجتازها فلسطين العربية وفي هذا الصراع العنيف الذي حمل عليه إخوانك العرب حملا وألجئوا إليه إلجاء لا خيار فيه، وفي هذه الحرب المستعمرة التي يوشك أن تضيق بها الرقعة فيتطاير شررها إلى جوانب العالم فتحرقه أو تغرقه" وقال الشيخ أحمد توفيق المدني رحمه الله في جويلية 1937 :"لكن نقطة الإحساس في العالم العربي اليوم إنما هي نقطة فلسطين. والخطر الداهم الذي يهدد العرب في كيانهم، وفي حياتهم، إنما هو خطر فلسطين".</p>

              <h2 className="text-xl font-bold mb-3 mt-8">ثانيا: حيرة العالم في حل القضية.</h2>
              <p className="mb-6"><strong>مما لا شك فيه أن العالم بأسره في حيرة من أمره بشأن حل القضية الفلسطينية وقد أشار إلى هذه الحيرة الشيخ الإبراهيمي رحمه الله في سنة 1948</strong> حيث قال :" وفي هذه الأزمة التي عقدها الطمع فعجز عن حلها العالم الذي لم يعرف القناعة، وأنشأها الباطل فلم يستطع التغلب عليها الرؤساء الذين لم يعرفوا الحق، وفي هذه المعركة التي قسمت كلا من العالمين الملحد والمتدين إلى معسكرين: بعض أسلحتهما الحديد والنار، وبعضها الرأي والمكيدة، وبعض أسبابهم إليها الحق الذي لا شبهة فيه، وأكثرها الباطل الذي لا مرية فيه، في هذه الظلمات المتراكمة نتوجه إليك مخلصين بنصيحة تضمن استمرار السير، وحفظ الاتجاه، وسلامة العاقبة".</p>

              <h2 className="text-xl font-bold mb-3 mt-8">ثالثا: القضية الفلسطينية ليست محلية بل إسلامية.</h2>
              <p className="mb-6"><strong>من أقبح وأشنع الكلمات التي يردّدها حكام الاعتلال والذل والإذلال عندما يُتّهمون بخذلان القضية الفلسطينية العادلة "لن نكون ملكيين أكثر من الملك" وهي خدعة مكشوفة أمام الشعوب الإسلامية لأن قضية فلسطين ليست محلية أو ملكا لسلطة محلية يحق لها أن تتصرف فيها كما يحلو لها وهذا ما قرره قادة الفكر والعلم والسياسة عندنا</strong>، لقد قام العلامة الشيخ عبد الحميد بن باديس رحمه الله باتصالات مع مفتي القدس الشيخ الأمين الحسيني رحمه الله منذ 1933: "كان للشيخ ابن باديس مراسلات دائمة مع مفتي القدس الأكبر الشيخ الأمين الحسيني.. ومن هؤلاء استطاع الشيخ ابن باديس الوقوف على آخر تطورات الأحداث في الساحة العربية منذ أول اجتماع للمجلس في القدس. وإننا نجد الدليل على هذا الإتصال أنه عندما وقعت حوادث قسنطينة بين المسلمين واليهود في جمادى الأولى 1353 (أغسطس 1934م) قام رئيس اللجنة التنفيذية للمؤتمر الإسلامي بالقدس بإرسال معونة إلى الشيخ عبد الحميد بن باديس مقدارها خمسون جنيها وخمس شلنات (ثلاثة آلاف وستمائة وخمسة وستين فرنكا) وتم توزيعها على عائلات المنكوبين"، ولقد بين الشيخ الإبراهيمي مكانة فلسطين عند كل مسلم في 1948 حيث قال والجزائر تحت الاستعمار "إن الجزائر وطنكم الصغير، وإن إفريقيا الشمالية وطنكم الكبير، وإن فلسطين قطعة من جزيرة العرب التي هي وطنكم الأكبر، وإن الرجل الصحيح الوطنية هو الذي لا تلهيه الأحداث عن القيام بواجبات وطنيه الأصغر والأكبر" بل إن الشيخ عبد الحميد بن باديس جعل الاعتداء على بيت المقدس كالاعتداء على مكة تماما، قال في أوت 1938 "رحاب القدس الشريف مثل رحاب مكة والمدينة، وقد قال الله في المسجد الأقصى في سورة الإسراء "الذي باركنا حوله" ليعرفنا بفضل تلك الرحاب، فكل ما وقع بها كأنه واقع برحاب المسجد الحرام ومسجد طيبة"، ونظرا لمكانة فلسطين في قلب المسلمين فقد وجب التضحية من أجل نصرتها لأنها ليست قضية محلية، قال الشيخ توفيق المدني رحمه الله في سنة 1937 "إن الواجب المحتم على كل عربي مسلم في أي قطر من أقطار الأرض، هو أن يقف إلى جانب أخيه العربي الفلسطيني، ينصره ويؤازره، ويضحي إلى جانبه أغلى وأعز التضحيات، مهما كلفه ذلك، فالمسألة ليست مسألة بلاد نائية، وليست مسألة محلية لا تهم إلا أهل فلسطين وحدهم، بل إنما هي مسألة العالم العربي بأسره، بل العالم الإسلامي برمته، وكل اقتطاع من أرض فلسطين إنما هو حز في رقبة العرب، ونحر للعالم الإسلامي من وريده".</p>

              <p className="mb-6">وقال الشيخ الإبراهيمي رحمه الله في 1948: "أيها العرب! إن قضية فلسطين محنة امتحن الله بها ضمائركم وهممكم وأموالكم ووحدتكم، وليست فلسطين لعرب فلسطين وحدهم، وإنما هي للعرب وحدهم، وإنما هي للعرب كلهم، وليست حقوق العرب فيها تنال بأنها حق في نفسها،وليست تنال بالهوينا والضعف،وليست تنال بالشعريات والخطابيات، وإنما تنال بالتصميم والحزم والاتحاد والقوة،
إن الصهيونية وأنصارها مصممون، فقابلوا التصميم بتصميم أقوى منه وقابلوا الاتحاد باتحاد أمتن منه.
وكونوا حائطا لا صدع فيه * وصفا لا يرقع بالكسالى "</p>

              <p className="mb-6"><strong>ومن العلماء الذين استنكروا محلية القضية الفلسطينية العلامة السلفي الطيب العقبي رحمه الله</strong>، هذا العلامة الذي جمع بين التعليم والدعوة والخطابة والصحافة والنشاط السياسي الداخلي والخارجي، قال هذا الشيخ في 13 أوت 1937:
"لبيك لبيك فلسطين، فما أنت لأهلك فقط ولكن للعرب كلهم للمسلمين أجمعين"، بين فيه حسرته وأفصح عن ألمه تجاه محنة الشعب الفلسطيني المتشرد من ويلات القمع الصهيوني بقوله "لهذا فإن كارثة فلسطين لم تكن بأمر يخص أهلها فحسب.. ولكنها كانت مأساة عامة وكارثة عظمى حلت بالعالم الإسلامي كله والعرب أجمعين ومن الناس اليوم من لا يلهج باسم فلسطين الشهيدة، فلسطين الدامية، فلسطين الثاكلة، فلسطين الباكية، الشاكية الحزينة، فلسطين ضحية الاستعمار الغاشم،...أراد الإنجليز العتاة البغاة تقديمها على مذبح مطامعهم ومصالحهم الخاصة لقمة سائغة للآكلين وغنيمة باردة لشذّاذ العالم ونفاية الأمم من الصهيونيين".</p>

              <p className="mb-6">وبذلك كانت مسؤولية نصرة فلسطين مسؤولية عظيمة، قال ابن باديس رحمه الله في 1938 : "وكل مسلم مسؤول أعظم المسؤولية عند الله تعالى على كل ما يجري هنالك من أرواح تزهق وصغار تيتم ونساء ترمل وأموال تهتك، وديار تخرب وحرمات تنتهك كما لو كان ذلك كله واقعا بمكة أو المدينة إن لم يعمل لرفع ذلك الظلم الفظيع بما استطاع" وكان الشيخ الإبراهيمي لا يمل من التأكيد على أن قضية فلسطين قضية إسلامية بالدرجة الأولى حيث قال سنة 1954 " قضية فلسطين في جوهرها وحقيقتها واعتبارها التاريخي قضية إسلامية من حيث أنّ فيها المسجد الأقصى ثالث المساجد المقدسة في حكم الإسلام، وهو أول قبلة صلى إليها المسلمون قبل الكعبة، ولئن نسخ هذا المعنى فإن الخصائص الأخرى من الاحترام الديني وشد الرحال إليه لم تنسخ، وإن المتوسمين في آيات الله المستخرجين لدقائق الحكم منها يتحملون من الأسرار في اختيارها قبلة أولى وفي كونها كانت نهاية للإسراء وبداية للعروج ما يضعها في موضع من الاحترام يوجب الدفاع عن مشاعرها، ودفع كل معتد على حرماتها أن تدنس بوثنية، وتطهيرها من كل من يريد بها شرا أو يريد فيها بإلحاد وإنها ميراث النبوة وضعه الله في أيد قادرة على حمايتها، وقد دافعت عنها بالفعل، وأقامت البرهان على اضطلاعها بحمايتها مدة أربعة عشر قرنا كاملة، وحاربت عليه أمم الأرض، وما سلبها الله من اليهود وأورثها المسلمين إلا لأن اليهود كانوا أعجز الناس عن حمايتها زمن، حيث أن فيها الصخرة التي هي أول محطة لاتصال الأرض بالسماء، ذلك الاتصال الذي كان سببا فيما فاض على الأرض من بركات السماء،ولو شاء الله لكان المعراج بعبده محمد صلى الله عليه وسلم من مكة التي هي موطنه ولكن كانت له في هذه الرحلة الأرضية حكم ولنا فيها عبر،فقد كانت رمزا إلى أنّ ملك الإسلام سيتسع حتى يبلغ في مرحلته الأولى ممالك النبوة قبله ومواطنهم ومواطئ أقدامهم ومدافنهم،وسينشر فيها هدايته وسيبسط عليها حمايته وكذلك وقع، ومواريث النبوة لا يستحقها إلا الأنبياء والمضطلعون بها من أممهم، ولقد قال صلى الله عليه وسلم :"زويت لي من الأرض فأريت مشارقها ومغاربها وسيبلغ ملك أمتي ما زوي لي منها"، ومما لا شك فيه أن فلسطين جزء هام من ديار الإسلام ولذلك وجب الدفاع عنها وعن المستضعفين فيها والسعي حثيثا لفك أسرها ومساجينها ورد المهجّرين والمهاجرين قسرا إلى أرضها، ولو دفعنا جميع أموالنا"، قال الشيخ محمد سعيد البوطي: "وجوب نصرة المسلمين بعضهم لبعض، مهما اختلفت ديارهم وبلادهم ما دام ذلك ممكن ،فقد اتفق العلماء والأئمة على أن المسلمين إذا قدروا على استنقاذ المستضعفين أو المأسورين أو المظلومين من إخوانهم المسلمين، في أي جهة من جهات الأرض، ثم لم يفعلوا ذلك، فقد باؤوا بإثم كبير". يقول أبو بكر بن العربي رحمه الله:" إذا كان في المسلمين أسراء أو مستضعفون فإن الولاية معهم قائمة، والنصرة لهم واجبة بالبدن، بأن لا تبقى منا عين تطرف، حتى نخرج لاستنقاذهم إن كان عددنا يحتمل ذلك، أو نبذل جميع أموالنا في استخراجهم، حتى لا يبقى لأحد درهم بعد ذلك"، وكما تجب موالاة المسلمين بعضهم بعضا، فإنه يجب أن تكون هذه الموالاة فيما بينهم، ولا يجوز أن يشيع شيء من الولاية أو التناصر أو التآخي بين المسلمين وغيرهم، وهذا ما يصرح به كلام الله عز وجل، إذ يقول:" والذين كفروا بعضهم أولياء بعض، إلا تفعلوه تكن فتنة في الأرض وفساد كبير" [الأنفال 8/73]. يقول ابن العربي رحمه الله:"قطع الله الولاية بين الكفار والمؤمنين، فجعل المؤمنون أولياء بعضهم بعض، يتناصرون بدينهم ويتعاملون باعتقادهم، ولا ريب أن تطبيق مثل هذه التعاليم الإلهية، هو أساس نصرة المسلمين في كل عصر وزمن، كما أن إهمالهم لها وانصرافهم إلى ما يخالفها هو أساس ما نراه اليوم من ضعفهم وتفككهم وتألب أعدائهم عليهم من كل جهة وصوب"، وإني لأعجب أشد العجب من النظام السعودي الذي يزعم رفع راية الإسلام والتوحيد كيف يسارع إلى إنقاذ النظام الاقتصادي الأمريكي الربوي المنهار، ولا يسارع إلى نجدة الإخوة في فلسطين، وخاصة غزة الصامدة؟!!! ولو أن الأموال التي تصرف على المهرجانات الصيفية في البلدان العربية والإسلامية صرفت على القضية الفلسطينية وتسليح المجاهدين لتم تحرير فلسطين "وما ذلك على الله بعزيز"، أما أن يقول ملك السعودية في رسالة لعباس الذي يدعمه سياسيا وماليا وإعلاميا، بل يقف إلى جانبه ضد سائر فصائل المقاومة والجهاد، أن الانقسام أشد خطرا من إسرائيل فهي كلمة قبيحة رعناء للتملص من المسؤولية، وماذا فعل النظام السعودي للقضية الفلسطينية قبل الإنقسام، وماذا فعل النظام السعودي لفك الحصار على عرفات وهو تحت الحصار يذوب كالشمعة أمام سمع وبصر العالم وحكام العرب، أخزاهم الله تعالى إلا أن يتوبوا ويرفعوا راية الجهاد والمقاومة لتحرير فلسطين؟!!! ولماذا أعلن النظام السعودي وجوب الجهاد في الأفغان ولم يحرض على الجهاد في فلسطين رغم أنها استعمرت في 1948؟!!! ولماذا لا ينادي الآن بالجهاد في الأفغان المحتلة من أمريكا، ولماذا لا يطالب بخروج حلف الناتو الذي تشارك فيه إسرائيل من باكستان؟!!.</p>

              <p className="mb-6">إن الإسلام لا يعترف بالحدود والسدود التي ما أنزل الله بها من سلطان ويجب أن لا تَحول الحدود دون نصرة المسلمين أينما كانوا وهذا ما نص عليه العلماء قديما وحديثا، قال الشيخ القرضاوي شفاه الله: "لقد كان وطن المسلم من قبل يعني "دار الإسلام" على اتساعها، فكل أرض تجري فيها أحكام الإسلام، وتقام شعائره، ويعلو سلطانه، هي وطن المسلم، ويغار عليه، ويدافع عنه، كما يدافع عن مسقط رأسه، وكان العالم ينقسم عند المسلم على هذا الأساس العقائدي: فهو إما دار إسلام وإما دار كفر، فالتفكير الإسلامي، والحس الإسلامي، لا يعرفان الإقليمية ولا العنصرية بحال من الأحوال، وفي الفقه الإسلامي، نجد هذه الصورة المعبرة عن وحدة الأمة المسلمة ووحدة الوطن الإسلامي، وذلك فيما ينقله العلامة ابن عابدين عن أئمة الفقه الحنفي حيث يقررون أن الجهاد فرض عين إن هجم العدو على بلد مسلم، وذلك على من يقرب من العدو أولا، فإن عجزوا أو تكاسلوا، فعلى من يليهم، حتى يفترض –على هذا التدريج- على كل المسلمين شرقا وغربا، وهذا متفق عليه بين الأئمة جميعا.

والعجب أن يقرر فقهاء الإسلام وجوب الدفاع عن البلد المسلم المعتدى عليه، وإن تكاسل أهله أنفسهم في الدفاع عنه، لأن هذا البلد ليس ملك أهله وحدهم، ولكنه –باعتباره جزءا من دار الإسلام- ملك المسلمين جميعا، وسقوطه في يد الكفار خسارة وهزيمة للمسلمين قاطبة، وصورة أخرى يذكرها ابن عابدين فيقول: "مسلمة سبيت بالمشرق، وجب على أهل المغرب تخليصها من الأسر"، وقال الإمام مالك:" يجب على المسلمين فداء أسراهم، وإن استغرق ذلك أموالهم، وهكذا قرر القرآن وقررت السنة أن المسلمين أمة واحدة "يسعى بذمتهم أدناهم وهم يد على من سواهم" ومن لم يصبح ناصحا –أي مخلصا بارا- لله ولرسوله ولأئمة المسلمين وعامتهم فليس منهم"، ولكن النزعة الوطنية والقومية جعلت المسلم يفكر في وطنه قبل عقيدته، ويقدم الكافر إذا كان من عنصره أو وطنه على المسلم من عنصر آخر أو في بلد أخر، ويسمى هذا أجنبيا، ويعامله معاملة الأجانب، وبرزت نزعات جاهلية تتنادى بالقومية العنصرية، والوطنية الإقليمية، لا بالأخوة الإسلامية، بل أصبحت الأوطان والقوميات وكأنها أوثان جديدة يعبدها الناس مع الله!
والعجب أن يتخذ أحد العنصرين بعض الكفار أولياء وحلفاء له ضد إخوانه المسلمين، مع قول الله المحكم: "ومن يتولهم منكم فإنه منهم".</p>

              <h2 className="text-xl font-bold mb-3 mt-8">رابعا: العرب ورفض قرار التقسيم سنة 1947:</h2>
              <p className="mb-6">* أخطر ما يواجه القضية الفلسطينية مناداة دول الإعتلال العربي بحل الدولتين وتنازل أهل فلسطين لليهود على بعض أراضيهم ليقيموا عليها دولتهم، أي تقسيم أرض فلسطين وهو ما رفضه العرب أثناء صدور قرار التقسيم سنة 1947، واندلعت الثورة وشكلت فرق الجهاد باسم الجهاد المقدس وأجمع المسلمون والعرب على رفض قرار التقسيم، قال الشيخ توفيق المدني رحمه الله سنة 1937 قبل تقسيم 1947:" كان آخر اختراع أنتجته المخيلة الاستعمارية الانكليزية هو تجزئة فلسطين إلى ثلاثة أقسام: قسم شرقي جبلي يقع ضمه إلى مملكة شرقي الأردن التي يتولى أمرهم الأمير عبد الله، وقسم غربي يشمل سواحل فلسطين الشمالية وأخصب بلادها ويكون دولة مستقلة تمام الاستقلال لها حكومتها وإدارتها ودستورها، وأخيرا قسم ثالث يشمل بيت المقدس وسواحل حيفا،ويبقى تحت الانتداب الانكليزي بدعوى حماية الأرض المقدسة ومجرى نفط الموصل، ففلسطين التي اقتطعت أول مرة من بلاد سوريا، ثم نكبت بالاستعمار الصهيوني، يريدون أن ينكبوها أخيرا بتقسيم آخر يمزق أوصالها، ويجعل لليهود فيها دولة رسمية ذات استقلال تام ،ثم تبقى المدينة المقدسة تحت نير الوصاية إلى أن يقع تمهيدها للصهيونية فتزدردها، أجمعت كلمة العرب في فلسطين على رفض هذا المشروع الخاسر، وأجمعت كلمة العرب في العالم أجمع على تأييد هذا الرفض الأبي، لأنه لا يوجد من يجري في دمائه دم العروبة الحار، ويرضى مثل هذه المذلة والمهانة".وقال أيضا: "وإن القلوب لتنفطر، والأنفس لتتقطع مما هو جار بفلسطين البائسة التعسة، وما يريده لها القوم من تمزيق الأوصال، وتقطيع البلاد، وتثبيت قدم الصهيونية بصفة دائمة مستمرة في أهم قسم من أقسامها وتشريد العرب والمسلمين إلى شرقيها القفر البلقع ، قام العالم الإسلامي كله بقوة رجل واحد ضد هذا الخطر العظيم الذي يهدد كيان الوطن العربي، ورفع المسلمون عقيرتهم بالاحتجاج الصارخ، فأجمع كتابهم وزعماءهم ورجال الرأي والتفكير و الإدارة والملك منهم على استهجان هذا المسلك الذي تسلكه إنكلترا، واستفظاع الأساليب الوحشية التي تسلكها في قهر البلاد ومحاولة قمع المعارضة فيها".</p>

              <p className="mb-6">* هذا موقف الشعوب وحكام العرب يومها رغم أن معظمهم كان تحت الاستعمار أو تحت الوصاية والانتداب مع ضعف القوة العسكرية، فكيف نقبل اليوم في ظل الاستقلال وكل دولة لها سيادتها وجيشها وقوتها العسكرية الضارية وجنرالاتها المتخرجين من أرقى المؤسسات في العالم بحل الدولتين؟!!! وإنها والله لإحدى الكبر، وكم كنت أتمنى لو أن قادة الأركان في العالم العربي والإسلامي إجتمعوا في مكة المكرمة لتحرير بيت المقدس وإعلان النفير العام لتحرير بيت المقدس كما فعل صلاح الدين الأيوبي، بدل من اجتماعهم تحت راية الحلف الأطلسي الناتو الذي يقتل إخواننا في أفغانستان وباكستان، وبحضور وزير الدفاع الإسرائيلي بزعم مكافحة الإرهاب المزعوم، وإلى متى تظل الجيوش العربية مصرّة على محاربة شعوبها وقمعها بدل التوجه إلى العدو الخارجي الذي يريد أن يسطو على شعوبنا بطريقة أو بأخرى بدعوى محاربة الإرهاب أو القاعدة، وها هي المخابرات الأمريكية تنصح بالتدخل في البلاد التي تتعرض للكوارث الطبيعية الخطيرة وكأنها وجدت خصما جديدا هو الإرهاب الطبيعي بدعوى المحافظة على الأنظمة المستبدة من السقوط؟!!! لقد اجتمع في الجزائر بتاريخ 13 أوت 2008 رؤساء أركان الدول الست لا من أجل التخطيط لفك الحصار على غزة أو تحرير فلسطين أو إنقاذ إخواننا في أفغانستان أو العراق أو دعم المقاومة في جنوب لبنان، أو الوقوف إلى جانب إيران إذا تعرضت لضربة غادرة من أمريكا أو إسرائيل أو حلف الناتو لاسيما وهي تتعرض لضغوط خارجية من العالم الغربي والعربي، بعد إعلان نتائج الانتخابات ورغم أن ولد عبد العزيز الانقلابي في موريتانيا حظي بتغطية هامة يوم تنصيبه 05/08/2009 عربيا وإقليميا ودوليا وقد قاطع حفل التنصيب أقطاب المعارضة لطعنهم في شرعية الرئيس، أما في إيران رغم أن الرئيس نجاد لم يأت عن طريق انقلاب عسكري، قاطعه الجميع بما في ذلك الدول العربية والإقليمية والدولية بحجة الطعن في النتائج من طرف المعارضة، بل هناك لقاءات تمت مع عبد العزيز جوهرها هو مقاومة الإرهاب في صحراء المغرب العربي، ولكن اجتمعوا فقط من أجل الاتفاق على التنسيق بين أجهزة الجيش لمكافحة الإرهاب والجريمة، وها هي فرنسا تدعم جنرال موريتانيا الإنقلابي عبد العزيز ليكون حارسا لمصالحها بدعوى التصدي للإرهاب، وقد كشفت جهات سياسية أن فرنسا كانت وراء تنصيب عبد العزيز، لا سيما وقد صرّح أثناء الحملة الانتخابية بأن من أولوياته محاربة الإرهاب، هذا البعبع –أي الإرهاب- الذي يتّخذه طغاة الداخل والخارج وسيلة رائجة إما للبقاء في الحكم وإما للتدخل الخارجي.</p>

              <h2 className="text-xl font-bold mb-3 mt-8">خامسا: بعض فتاوى علماء المسلمين في حرمة حل الدولتين</h2>
              <p className="mb-6">* لقد تقرر شرعا وهو محل إجماع -والحمد لله- بين جميع أهل العلم قديما وحديثا أنه يحرم التفريط في أي قطعة أرضية -قلّت أو كثرت- من ديار الإسلام وبما أن فلسطين جزء عزيز لا يتجزأ من دار الإسلام، يحرم التنازل عن أي جزء منها، فكيف يقال بجواز حل الدولتين رغم تعنت إسرائيل وهذا التعنت الصلف والفاضح ظهر جليا وبطريقة رسمية في خطاب ناتنياهو بتاريخ 14/06/2009 من جامعة التطرف الصهيوني ردا على خطاب أوباما من جامعة القاهرة التي تخرج منها أساطين الفكر العلماني حيث رسم ناتنياهو معالم الدولة الهزيلة القزم للشعب الفلسطيني الفاقدة للحياة بكل المعايير الدولية، وما تلاه من قرارات فعلية وميدانية كتوسيع دائرة الاستيطان ضاربة بمطالب المجتمع الدولي وعلى رأسهم إدارة أوباما المتخبطة سياسيا وإعلاميا ودبلوماسيا عرض الحائط وكذا قرار تهويد أسماء المدن الفلسطينية العريقة وإصدار قانون الولاء اليهودي ونزع المساكن من أهلها الأصليين بالقدس بالقوة واتخاذ الإجراءات الميدانية لتدمير المسجد الأقصى لإقامة الهيكل المزعوم، ولقد تملكني الغضب عندما زار أوباما ألمانيا بعد يوم واحد من خطابه في القاهرة ووقف خاشعا أمام معسكرات الاعتقال النازي، أما خطابه بتاريخ 06/06/2009 في فرنسا بمناسبة ذكرى الإنزال 1944، فقد نسف فيه صلب ما جاء في خطاب القاهرة ما يدل على تردد الإدارة الأمريكية في الثبوت على موقف حازم واضح وصارم، بعيدا عن الارتجال والتخبط، ففي المساء يعترفون بنجاد كرئيس منتخب، وفي الصباح يعتذرون عن ذلك بكل غباء.</p>

              <p className="mb-6">* قد أصدر علماء العالم الإسلامي فتاوى فردية وأخرى جماعية تحرم التنازل عن أي جزء من أرض فلسطين وسوف أقتصر على بعض الفتاوى الجماعية حتى يعرف العام والخاص في العالم الإسلامي بطلان حل الدولتين من الناحية الشرعية، وأن كل من يقول بحل الدولتين من حكام الخذلان والاعتلال يجب أن يرد عليه قوله بكل وضوح وصراحة، وعلى العلماء أن يصدعوا بكلمة الحق في وجه الملوك والأمراء والحكام ولو نزل بهم مكروه في سبيل الله تعالى، والرسول صلى الله عليه وسلم يقول "أفضل الجهاد كلمة حق عند سلطان جائر" وفي الحديث الآخر الصحيح "ألا إن سلعة الله غالية"، وأن يقولوا للحكام والملوك والأمراء إما أن يفتحوا المجال لنصرة العامة وإما أن نحرض الأمة على عصيانكم وكسر الحدود والسدود مناصرة لإخواننا في فلسطين، ومن تلك الفتاوى الجماعية أذكر منها ما يلي :</p>

              <p className="mb-6"><strong>1-فتوى علماء فلسطين المنعقد في القدس في 26 يناير 1935</strong>، وقّع عليها أكثر من 249 من القضاة وأهل الفتوى والعلماء والدعاة وعلى رأس هؤلاء الشيخ أمين الحسيني مفتي القدس رحمه الله، ومما جاء في تلك الفتوى: "فإننا نحن المفتين والقضاة والمدرسين والخطباء والوعاظ وسائر علماء المسلمين ورجال الدين في فلسطين،المجتمعين اليوم في الاجتماع الديني المنعقد في بيت المقدس بالمسجد الأقصى المبارك حوله بعد البحث والنظر فيما ينشأ عن بيع الأراضي في فلسطين لليهود من تحقيق المقاصد الصهيونية في تهويد هذه البلاد الإسلامية المقدسة وإخراجها من أيدي أهلها، وبعد النظر في الفتاوى التي أصدرها المفتون وعلماء المسلمين في العراق ومصر والهند والمغرب وسوريا والأقطار الإسلامية الأخرى والتي أجمعت على تحريم بيع الأرض في فلسطين لليهود، فهو يستلزم الكفر والارتداد عن دين الإسلام باعتقاد حله كما جاء في فتوى سماحة السيد أمين الحسيني مفتي القدس ورئيس المجلس الإسلامي الأعلى، بعد النظر والبحث في ذلك كله وتأييد ما جاء في تلك الفتاوى الشريفة والاتفاق على أن البائع والسمسار والمتوسط في الأراضي بفلسطين لليهود والمسهل له هو:
              <br/>- أولا:عامل ومظاهر على إخراج المسلمين من ديارهم.
              <br/>- ثانيا:مانع لمساجد الله أن يذكر فيها اسمه وساع في تخريبها.
              <br/>- ثالثا:متخذ اليهود أولياء لأن عمله يعد مساعدة ونصرا لهم على المسلمين.
              <br/>- رابعا:مؤذ لله ولرسوله وللمؤمنين.
              <br/>- خامسا:خائن لله ولرسوله وللأمانة.</p>

              <p className="mb-6"><strong>2-فتوى علماء جامع الأزهر يوم كان للأزهر الشريف صولة وجولة واستقلالية وشيخه يتم بالانتخاب من أهل العلم أنفسهم</strong> وليس مجرد تابع لذيل السلطة التي نصبته مما يجعل منه شيخا للسلطة لا شيخا للأزهر أو مفتيا للسلطة لا مفتي الجمهورية كما يقال، وشتان بين مفتي الجمهورية ومفتي السلطة، ونصت تلك الفتوى الصادرة سنة 1947 ردا على قرار التقسيم على وجوب الجهاد وحماية الأقصى، وقّّع عليه أكثر من 20 عالما من كبار العلماء وعلى رأسهم الشيخ مأمون الشناوي، ومحمد حسنين مخلوف، ومحمود شلتوت، وعبد الرحمن تاج رحمهم الله، ومما جاء في تلك الفتوى:</p>

              <p className="mb-6 text-center">* بسم الله الرحمن الرحيم</p>

              <p className="mb-6">يا معشر المسلمين...قضي الأمر،وتألبت عوامل البغي والطغيان على فلسطين، وفيها المسجد الأقصى،أولى القبلتين وثالث الحرمين ومنتهى إسراء خاتم النبيين صلوات الله وسلامه عليه، قضي الأمر وتبين لكم أن الباطل مازال في غلوائه:وأن الهوى ما فتئ على العقول مسيطرا،وأن الميثاق الذي زعموه سبيلا للعدل والإنصاف ما هو إلا تنظيم للظلم والإجحاف، ولم يبق بعد في بلادنا، وأن يجثوا بها صدورنا،وأن يمزقوا بها أوصال شعوب وحد الله بينها في الدين و اللغة والشعور. إن قرار هيئة الأمم المتحدة قرار من هيئة لا تملكه، وهو قرار باطل جائر ليس له نصيب من الحق ولا العدالة، ففلسطين ملك العرب والمسلمين، بذلوا فيها النفوس الغالية والدماء الزكية،وستبقى إن شاء الله ملك العرب والمسلمين رغم تحالف المبطلين،وليس لأحد كائنا من كان أن ينازعهم فيها أو يمزقها، فإذا كنتم قد استنفدتم بذلك جهاد الحجة والبيان، فإن وراء هذا الجهاد الإنقاذ لحق وحمايته جهادا سبيله مشروعة، وكلمته مسموعة، تدفعون به كيانكم ومستقبل أبنائكم وأحفادكم، فذودوا عن الحمى، وادفعوا الذئاب عن العرين، وجاهدوا في الله حق جهاده.</p>

              <p className="mb-6">{ فليُقاتل في سبيل الله الذين يشرون الحياة الدنيا بالآخرة ومن يقاتل في سبيل الله فيقتل أو يغلب فسوف نؤتيه أجرا عظيما}، {الذين آمنوا يقاتلون في سبيل الله والذين كفروا يقاتلون في سبيل الطاغوت فقاتلوا أولياء الشيطان إنّ كيد الشيطان كان ضعيفا}، {خذوا حذركم فانفروا ثباتا أو انفروا جميعا} ، فليبذل كل عربي وكل مسلم في أقصى الأرض وأدناها من ذات نفسه وماله ما يرد عن الحمى كيد الكائدين وعدوان المعتدين، الجهاد، الجهاد، الجهاد، والله معكم.</p>

              <p className="mb-6"><strong>3-الفتوى الصادرة عن لجنة الفتوى بالأزهر التي نصت على تحريم الصلح مع إسرائيل ووجوب الجهاد وذلك بتاريخ 1956</strong> ووقّع عليها جهابذة العلماء الصادعين بكلمة الحق وعلى رأسهم حسنين مخلوف رحمه الله، ومحمد شلتوت رحمه الله ومحمد الشبكي رحمه الله، ومما جاء في تلك الفتوى الهامة: " فقد اطلعت لجنة الفتوى بالأزهر الشريف على الاستفتاء المقدم إليها عن حكم الشريعة الإسلامية في إبرام الصلح مع إسرائيل التي اغتصبت فلسطين من أهلها وأخرجتهم من ديارهم وشردتهم نساء وأطفالا وشيبا وشبانا في آفاق الأرض واستلبت أموالهم واقترفت أفظع الآثام في أماكن العبادة والآثار والمشاهد الإسلامية المقدسة وعن حكم التواد والتعاون مع دول الاستعمار التي ناصرتها وتناصرها في هذا العدوان الأثيم وأمدتها بالعون السياسي والمادي لإقامتها دولة يهودية في هذا القطر الإسلامي بين دول الإسلام، وعن حكم الأحلاف التي تدعو إليها دول الاستعمار والتي من مراميها تمكين إسرائيل من البقاء في أرض فلسطين لتنفيذ السياسة الاستعمارية وعن واجب المسلمين حيال فلسطين وردها إلى أهلها وحيال المشروعات التي تحاول إسرائيل ومن وراءها الدول الاستعمارية أن توسع بها رقعتها وتستجلب بها المهاجرين إليها وفي ذلك تركيز لكيانها وتقوية لسلطانها مما يضيق الخناق على جيرانها ويزيد في تهديدها لهم ويهيئ للقضاء عليهم. وتفيد اللجنة أن الصلح مع إسرائيل - كما يريده الداعون إليه – لا يجوز شرعا لما فيه من إقرار الغاصب على الاستمرار في غصبه، والاعتراف بحقية يده على ما اغتصبه ، وتمكين المعتدي من البقاء على عدوانه. وقد أجمعت الشرائع السماوية والوضعية على حرمة الغصب ووجوب رد المغصوب إلى أهله وحثت صاحب الحق على الدفاع والمطالبة بحقه ففي الحديث الشريف "من قتل دون ماله فهو شهيد، ومن قتل دون عرضه فهو شهيد" وفي حديث آخر"على اليد ما أخذت حتى ترد". فلا يجوز للمسلمين أن يصالحوا هؤلاء اليهود الذين اغتصبوا أرض فلسطين واعتدوا فيها على أهلها وعلى أموالها على أي وجه يُمكّن من البقاء كدولة في أرض هذه البلاد الإسلامية المقدسة، بل يجب عليهم أن يتعاونوا جميعا على اختلاف ألسنتهم وألوانهم وأجناسهم لرد هذه البلاد إلى أهلها، وصيانة المسجد الأقصى مهبط الوحي ومصلى الأنبياء الذي بارك الله حوله، وصيانة الآثار والمشاهد الإسلامية من أيدي هؤلاء الغاصبين وأن يعينوا المجاهدين بالسلاح وسائر القوى عل الجهاد في هذا السبيل وأن يبذلوا فيه كل ما يستطيعون حتى تطهر البلاد من آثار هؤلاء الطغاة المعتدين. قال الله تعالى: "وأعدّوا لهم ما استطعتم من قوة ومن رباط الخيل ترهبون به عدوا الله وعدوكم وآخرين من دونهم لا تعلمونهم الله يعلمهم" ومن قصر في ذلك أو فرط فيه أو خذل المسلمين عنه أو دعا إلى ما من شأنه تفريق الكلمة وتشتيت الشمل والتمكين لدول الاستعمار والصهيونية من تنفيذ خططهم ضد العرب والإسلام وضد هذا القطر العربي الإسلامي فهو-في حكم الإسلام-مفارق جماعة المسلمين ومقترف أعظم الآثام، وكذلك يحرم شرعا على المسلمين أن يمكنوا إسرائيل ومن ورائها الدول الاستعمارية التي كفلت لها الحماية والبقاء من تنفيذ تلك المشروعات التي لا يراد بها إلا ازدهار دولة اليهود وبقائها في رغد من العيش و خصوبة في الأرض حتى تعيش كدولة تناوئ العرب والإسلام في أعز دياره"، ولمكانة هذه الفتوى أنه عندما ذهب الرئيس المصري السادات إلى القدس في نوفمبر 1977 والتي أسفرت على معاهدة كامب ديفيد المشؤومة على الأمة وبعد رجوعه من تلك الزيارة حاول علماء السلطان إيجاد غطاء شرعي لما أقدم عليه وشبهوا فعله بصلح الحديبية الذي قام به الرسول صلى الله عليه وسلم، ولكن العلماء الربانيين كشفوا التلبيس الذي قام به علماء السوء الذين يشترون بفتواهم ثمنا قليلا، واجتمعوا وأصدروا فتوى صدرت عن لجنة الفتوى بالأزهر الشريف أكدت فيها على فتوى لجنة الفتوى بالأزهر الصادرة في 1956، ومما جاء في تلك الفتوى المؤكدة لفتوى 1956 "أن اللجنة تفيد أن الصلح مع إسرائيل -كما يريده الداعون إليه- لا يجوز شرعا لما فيه من إقرار للغاصب على استمرار على غصبه والاعتراف بأحقّية يده على ما اغتصبه وتمكين المعتدي من البقاء على عدوانه..."</p>

              <p className="mb-6"><strong>4-الفتوى الصادرة عن المؤتمر الدولي الإسلامي المنعقد في 1968 بباكستان والتي وقّع عليها حوالي 20 عالما من كبار علماء العالم الإسلامي</strong> ومما جاء في تلك الفتوى الهامة: "فقد أطلعنا على الاستفتاء المقدم إلينا عن حكم الشريعة الإسلامية في إبرام الصلح مع هؤلاء الذين اغتصبوا فلسطين وبعض الأراضي المصرية والسورية وشردوا أهلها المسلمين واستلبوا أملاكهم واقترفوا أفظع الآثام من قتل و سلب و تعذيب للمسلمين واحتلوا مدينة القدس وما فيها من أماكن مقدسة إسلامية وفي مقدمتها المسجد الأقصى المبارك، القبلة الأولى ومكان الإسراء والمعراج للرسول الأعظم صلى الله عليه وسلم، أن الصلح مع هؤلاء المحاربين لا يجوز شرعا، لما فيه من إقرار الغاصب على غصبه والاعتراف بأحقية يده على ما اغتصبه، فلا يجوز للمسلمين أن يصالحوا هؤلاء اليهود المعتدين، لأن ذلك يمكنهم من البقاء كدولة في أرض هذه البلاد الإسلامية المقدسة، بل يجب على المسلمين جميعا أن يبذلوا قصارى جهودهم لتحرير هذه البلاد وإنقاذ المسجد الأقصى وسائر المقدسات الإسلامية من أيادي الغاصبين وعلى جميع المسلمين أن يقوموا بواجب الجهاد إلى أن يسترجعوا هذه البلاد من الغاصبين".</p>

              <p className="mb-6"><strong>5- الفتوى الصادرة عن كبار العلماء والدعاة من العالم الغربي والإسلامي بتاريخ 1989 وقد وقع عليها حوالي 63 عالما</strong>، منهم الشيخ الغزالي رحمه الله، والشيخ القرضاوي شفاه الله والشيخ الفقيه الأصولي وهبة الزحيلي والشيخ عمر سليمان الأشقر حفظ الله الجميع ونفع بهم، ومما جاء في تلك الفتوى الهامة والخطيرة:
"فإن مهمة علماء المسلمين وأهل الرأي فيهم أن يكونوا عصمة للمسلمين ،وأن يبصروهم إذا احتارت بهم السبل وادلهمت عليهم الخطوب، ونحن الموقعين على هذه الوثيقة نعلن للمسلمين في هذه الظروف الصعبة أن اليهود هم أشد الناس عداوة للذين آمنوا،إغتصبوا فلسطين،واعتدوا على حرمات المسلمين فيها وشرّدوا أهلها، ودنّسوا مقدساتها،ولن يقر لهم قرار حتى يقضوا على دين المسلمين،وينهوا وجودهم ويتسلطوا عليهم في كل مكان، ونحن نعلن بما أخذ الله علينا من عهد وميثاق في بيان الحق أنّ الجهاد هو السبيل الوحيد لتحرير فلسطين، وأنه لا يجوز بحال من الأحوال الاعتراف لليهود بشبر من أرض فلسطين، وليس لشخص أو جهة أن تقر اليهود على أرض فلسطين أو تتنازل لهم عن أي جزء منها أو تعترف لهم بأي حق فيها، إنّ هذا الاعتراف خيانة لله والرسول وللأمانة التي وكل المسلمين المحافظة عليها، والله يقول: "يا أيها الذين آمنوا لا تخونوا الله والرسول وتخونوا أماناتكم وانتم تعلمون"،وأي خيانة أكبر من بيع مقدسات المسلمين،والتنازل عن بلاد المسلمين إلى أعداء الله ورسوله والمؤمنين".</p>

              <p className="mb-6"><strong>6-وجاء في كتاب الفتاوى الإسلامية من دار الإفتاء المصرية المجلد 7</strong>: "إن الشريعة الإسلامية أوجبت على كل مسلم أن يشارك إخوانه في دفع أي اعتداء يقع على وطنه، أو على أي وطن إسلامي آخر، لأن الأمة الإسلامية أمة واحدة، قال الله تعالى:"إن هذه أمتكم أمة واحدة وأنا ربكم فاعبدون" وكل بلد أغلب أهله مسلمون يعتبر بلدا لكل مسلم، فإذا وقع اعتداء من حكومة أجنبية على أي وطن إسلامي بقصد احتلاله، أو احتلال جزء منه أو بأي سبب آخر، فرض على مسلمي هذا البلد فرضا عينيا أن يجاهدوا ويقاتلوا لدفع هذا العدوان، وعلى أهالي البلاد الإسلامية الأخرى مشاركتهم في دفع هذا العدوان، ولا يجوز مطلقا الرضا إلا بجلاء المعتدي عن جميع الأراضي، وكل من قصر في أداء هذا الواجب يعتبر خائنا لدينه ولوطنه وبالأولى كل من مال إلى عدو المسلمين وأيده في عدوانه بأي طريق من طرق التأييد يكون خائنا لدينه، فإن الاعتداء الذي يقع على أي بلد من البلاد الإسلامية اعتداء في الواقع على جميع المسلمين".</p>

              <p className="mb-6">* تلك نبذة مختصرة من فتاوى العلماء الربانيين في تحريم تقسيم فلسطين إلى دولتين أو التفريط في أي شبر من أرض فلسطين.</p>

              <p className="mt-10 text-end font-bold">نائب رئيس الجبهة الإسلامية للإنقاذ<br/>بن حاج علي</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetails;

