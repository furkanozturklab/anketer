/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#15151d",
        "second": "#fafafc",
        "three": "#a4a7b1",

        'publicColor': '#2e1061E6',
        'politicsColor': "#c2410cE6",
        'tecnoColos' : "#083344E6",
        'productColors': "#500724E6",
        'lifeColors': "#082f49E6",
        
        'org-50': '#fff9db',
        'org-100': '#fff3b2',
        'org-200': '#ffea7d',
        'org-300': '#ffdf49',
        'org-400': '#ffd419',
        'org-500': '#ffc107',
        'org-600': '#ffb400',
        'org-700': '#ffa600',
        'org-800': '#ff9900',
        'org-900': '#ff8c00',

      },
      backgroundImage: {
        "tecno": "url(assets/img/tecno_ex.jpg)",
        "life": "url(assets/img/life_ex.jpg)",
        "product": "url(assets/img/product_ex.jpg)",
        "public": "url(assets/img/public.jpg)",
        "time": "url(assets/img/time_ex.jpg)",
        "judgment": "url(assets/img/judgment_ex.jpg)",

      },
      scale: {
        "80": "0.8"
      },
      blur: {
        xs: '2px',
        xxs: '1px',
      },
      lineHeight: {
        '11': '2.875rem',
        '12': '3.125rem'
      }, content: {
        "tecno": "url(assets/img/tecno_ex.jpg)",
        "life": "url(assets/img/life_ex.jpg)",
        "product": "url(assets/img/product_ex.jpg)",
        "public": "url(assets/img/public.jpg)",
        "time": "url(assets/img/time_ex.jpg)",
        "judgment": "url(assets/img/judgment_ex.jpg)",
      },


    },
  },
  plugins: [

  ],
}