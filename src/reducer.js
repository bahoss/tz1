import { AUTHORISATION } from './constants';

let initialState = {
  authorisation: false,
  news: [
    {
      title:
        'Азмун и Ракицкий - в старте "Зенита" на матч с "Локо" - СПОРТ - ЭКСПРЕСС',
      description:
        '"Зенит" объявил состав на матч 22-го тура премьер-лиги против "Локомотива".',
      url:
        'https://m.sport-express.ru/football/rfpl/news/azmun-i-rakickiy-v-starte-zenita-na-match-s-loko-1531961/',
      urlToImage:
        'https://ss.sport-express.ru/userfiles/materials/sharing/153/1531961.jpg'
    },
    {
      title:
        '«Любим тебя!»: Алдонин выложил видео играющей на рояле дочери - Рамблер',
      description:
        'Дочь Юлии Началовой, 12-летняя Вера, впервые показалась на публике после похорон матери. Ее отец, футболист Евгений Алдонин, выложил в инстаграм видео, где она играет на рояле.',
      url:
        'https://news.rambler.ru/starlife/41994846-lyubim-tebya-aldonin-pokazal-video-vystupleniya-docheri/',
      urlToImage:
        'https://img.rl0.ru/307b4ea6ed3cbb793b49ad25d40c8b5a/c600x315/news.rambler.ru/img/2019/04/07095512.628682.6767.jpg'
    },
    {
      title: 'Стреляющий дровами танк Т-80 попал на видео - Известия',
      description:
        'На 61-м бронетанковом заводе под Санкт-Петербургом танк Т-80 произвел выстрел поленом, для того чтобы оценить состояние пушки после ремонта боевой машины. Также в дуло залили воду из канистры, для того чтобы «снаряд» не загорелся.Кадры в воскресенье, 7 апреля…',
      url:
        'https://iz.ru/865224/2019-04-07/streliaiushchii-drovami-tank-t-80-popal-na-video',
      urlToImage:
        'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-04/1_12.jpg?itok=ceLiLmYW'
    },
    {
      title:
        'Сумасшедший камбэк «Урала»! Погребняк отправил «Динамо» в зону стыков - Чемпионат',
      description: 'А Аленичев всё ближе к официальному вылету.',
      url:
        'https://www.championat.com/football/article-3724175-ural---enisej---32-7-aprelja-2019-obzor-pogrebnjak-zabil-pervyj-gol.html',
      urlToImage: 'https://img.championat.com/news/social/a/6d/3724175.jpg'
    },
    {
      title:
        'Ливия: армия Хафтара сообщила о провале контрнаступления войск Сараджа - Вести.Ru',
      description:
        'Контрнаступление лояльных Правительству национального согласия (ПНС) Ливии Фаиза Сараджа войск в Триполи провалилось, сообщил представитель Ливийской национальной армии (ЛНА) бригадный генерал Ахмед аль-Мисмари.',
      url: 'https://www.vesti.ru/doc.html?id=3134852',
      urlToImage: 'https://cdn-st1.rtr-vesti.ru/p/xw_1047778.jpg'
    },
    {
      title:
        'Объявлены официальные итоги первого тура президентских выборов на Украине - Lenta.ru',
      description:
        'ЦИК Украины подвел официальные итоги первого тура выборов президента Украины. По результатам обработки электронных и бумажных протоколов кандидат от партии «Слуга народа» Владимир Зеленский получил 30,24 процента голосов, действующий президент Украины Петр По…',
      url: 'https://lenta.ru/news/2019/04/07/official/',
      urlToImage:
        'https://icdn.lenta.ru/images/2019/04/07/15/20190407154604844/detail_75bc389facbda40e6b813f9b250c237f.jpg'
    },
    {
      title:
        'Пушков отреагировал на призыв возбудить уголовное дело против Зеленского - РИА Новости',
      description:
        'Российский сенатор Алексей Пушков прокомментировал призыв первого вице-спикера Рады Ирины Геращенко возбудить уголовное дело против Владимира Зеленского из-за... РИА Новости, 07.04.2019',
      url: 'https://ria.ru/20190407/1552456225.html',
      urlToImage:
        'https://cdn25.img.ria.ru/images/155214/79/1552147953_0:0:2993:1684_1036x0_80_0_0_7bbbf0e43e1dfd13cc499da36d371bf5.jpg'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORISATION:
      return {
        ...state,
        authorisation: action.payload
      };

    default:
      return state;
  }
};
