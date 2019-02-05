module.exports = {
  siteMetadata: {
    title: `Panda Eating Lots and Lots and Lots`,
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '2016705bbe2ae6a64cb69f0f52798942',
        location: 'Chicago',
        units: 'metric',
        type: 'forecast'
      },
    },
  
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '1f589825f06b7541de0947f8543d7791',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    }
  ]
}