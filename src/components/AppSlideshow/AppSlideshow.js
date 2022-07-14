export default {
    name: 'AppSlideshow',
    data() {

        return {
            buttons: [
                {
                    id: 1,
                    url: '6539d6faf8d33b8d62c22.jpg'
                },
                {
                    id: 2,
                    url: '06bbbbfd9ad4598a00c54.jpg'
                },
                {
                    id: 3,
                    url: '8acf45f764dea780fecf3.jpg'
                },
                {
                    id: 4,
                    url: 'ea886dac4c858fdbd6941.jpg'
                }
            ],
            image: '6539d6faf8d33b8d62c22.jpg',
            infoObject: {
                Address: "TH building, 3/78 Duy Tan Street, Cau Giay, Ha Noi",
                Phone: "0123 xxx xxx",
                Email: "contact@hachi-x.com"
            },
        }
        
    },
        
        
        
    methods: {
    onClick(btn) {
        // const isClick = 0;
        console.log(btn)
        this.image = btn.url
    }

}
}
// export default {
//     data() {
//       return {
//         slide: 0,
//         sliding: null
//       }
//     },
//     methods: {
//       onSlideStart() {
//         this.sliding = true
//       },
//       onSlideEnd() {
//         this.sliding = false
//       }
//     }
//   }