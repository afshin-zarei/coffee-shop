/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.{html,js}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            brown: {
               100: "##ECE0D1",
               300: "#DBC1AC",
               600: "#967259",
               900: "#634832",
            },
         },
         boxShadow: {
            normal: "0 1px 10px rgba(0,0,0,0.05)",
         },
         borderRadius: {
            "4xl": "2rem",
         },
         fontFamily: {
            Dana: "Dana",
            DanaMedium: "DanaMedium",
            DanaDemiBold: "DanaDemiBold",
            MorabbaLight: "MorabbaLight",
            MorabbaMedium: "MorabbaMedium",
            MorabbaBold: "MorabbaBold",
         },
         letterSpacing: {
            tightest: "-.065em",
         },
         spacing: {
            4.5: "1.125rem",   // 18px
            6.5: "1.625rem",   // 26px
            7.5: "1.875rem",   // 30px
            9.5: "2.375rem",   // 38px
            15.5: "3.875rem",  // 62px
            19: "4.75rem",     // 62px
            25: "6.25rem",     // 100px
            30: "7.5rem",      // 120px
            43: "10.75rem",    // 172px
            50: "12.5rem"      // 200px
         },
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               lg: "0.6rem"
            }
         },
         backgroundImage: {
            'home-mobile': 'url(../images/headerBgMobile.webp)',
            'home-desktop': 'url(../images/headerBgDesktop.webp)'
         }
      },
      screens: {
         'xs': '480px',
         'sm': '640px',   
         'md': '768px',   
         'lg': '1024px',   
         'xl': '1280px',
         '2xl': '1536px',
      },
   },
   plugins: [
      function ({ addVariant }) {
         addVariant("child", "& > *");
         addVariant("child-hover", "& > *:hover");
      },
   ],
};
