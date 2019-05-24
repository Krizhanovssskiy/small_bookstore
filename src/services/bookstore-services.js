
export default class BookstoreServices {

  data = [
    {
      id: 1,
      title: 'JavaScript. Сильные стороны',
      author: 'Дугласом Крокфордом',
      price: 40,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/Good_parts-1024x810.png'
    },
    {
      id: 2,
      title: 'Вы не знаете JS',
      author: 'Кайлом Симпсоном',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/you-do-not-know-1024x588.jpg'
    },
    {
      id: 3,
      title: 'Выразительный Javascript',
      author: 'Марейн Хавербек',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/eloquent-1024x557.png'
    },
    {
      id: 4,
      title: 'Сила JavaScript. 68 способов эффективного использования JS',
      author: 'Дэвидом Херманом',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/effective-1024x415.png'
    },
    {
      id: 5,
      title: 'JavaScript. Подробное руководство',
      author: 'Дэвид Флэнаган',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/definitive-1024x828.png'
    },
    {
      id: 6,
      title: 'Секреты JavaScript ниндзя',
      author: 'Джон Резиг и Беэр Бибо',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/ninja-1024x516.png'
    },
    {
      id: 7,
      title: 'JavaScript. Шаблоны',
      author: 'Стояном Стефановым',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/patterns-1024x524.png'
    },
    {
      id: 8,
      title: 'Принципы ООП в Javascript',
      author: 'Николас Закас',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/OOP-1024x402.png'
    },
    {
      id: 9,
      title: 'Программирование приложений на JavaScript. ' +
        'Устойчивая веб-архитектура с помощью Node, HTML5 и современных JS-библиотек',
      author: 'Эрик Эллиот',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/applications-1024x690.png'
    },
    {
      id: 10,
      title: 'JavaScript. Основы',
      author: 'Пол Уилтон',
      price: 45,
      coverImg: 'https://techrocks.ru/wp-content/uploads/2018/04/beginning-1024x611.png'
    },

  ];

  getBooks() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        // if (Math.random() > 0.7) {
        //   reject(new Error('aasas'))
        //
        // }
        resolve(this.data)
      },4)

    })
  }

}