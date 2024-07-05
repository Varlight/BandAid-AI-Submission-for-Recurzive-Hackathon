// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Vars
const data = [
  {
    title: 'Heart and Lungs',
    subtitle: '',
    amount: '01/07/2024',
    imgSrc: '/images/cards/apple-iPhone-13.png'
  },
  {
    title: 'Head and Neck',
    subtitle: '',
    amount: '02/07/2024',
    imgSrc: '/images/cards/nike-air-jordan.png'
  },
  {
    title: 'Abdomen',
    subtitle: '',
    amount: '03/07/2024',
    imgSrc: '/images/cards/beats-studio-2.png'
  },
  {
    title: 'Skin',
    subtitle: '',
    amount: '04/07/2024',
    imgSrc: '/images/cards/apple-watch-series-7.png'
  },
  {
    title: 'Extremities',
    subtitle: '',
    amount: '05/07/2024',
    imgSrc: '/images/cards/amazon-echo-dot.png'
  },
  {
    title: 'Chest',
    subtitle: '',
    amount: '06/07/2024',
    imgSrc: '/images/cards/play-station-console.png'
  }
]

const PopularProducts = () => {
  return (
    <Card>
      <CardHeader
        title='Doctor Reports'
        subheader='Monday - Saturday'
        action={<OptionMenu options={['Refresh', 'Upadate', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-[1.638rem]'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{`Visited${item.subtitle}`}</Typography>
              </div>
              <Typography>{item.amount}</Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PopularProducts
