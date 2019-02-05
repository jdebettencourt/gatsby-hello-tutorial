module.exports = {
  siteMetadata: {
    title: `Panda Eating Lots and Lots and Lots`,
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '20160123456789123456789212345678',
        location: 'Chicago',
        units: 'metric',
        type: 'forecast'
      },
    },
  
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '1f580123456789123456789212345678',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    }
  ]
}