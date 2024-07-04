// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [{ data: [32, 98, 61, 41, 88, 47, 71] }]

const data = [
  {
    amount: '5.11m',
    trendNumber: 91,
    title: 'Red blood cells',
    avatarColor: 'primary',
    subtitle: '4.35m - 5.65m',
    avatarIcon: 'tabler-chart-pie-2'
  },
  {
    amount: '8,899',
    trendNumber: 89,
    title: 'White blood cells',
    avatarColor: 'success',
    subtitle: '4500-11,000',
    avatarIcon: 'tabler-currency-dollar'
  },
  {
    amount: '289,000',
    trendNumber: '67',
    title: 'Platelets',
    avatarColor: 'secondary',
    subtitle: '150,000-450,000',
    avatarIcon: 'tabler-credit-card'
  }
]

const EarningReports = () => {
  // Vars
  const primaryColorWithOpacity = 'var(--mui-palette-primary-lightOpacity)'

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -16,
        left: -18,
        right: -17,
        bottom: -11
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '60%'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      'var(--mui-palette-primary-main)',
      primaryColorWithOpacity,
      primaryColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '13px',
          colors: 'var(--mui-palette-text-disabled)'
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Blood Reports'
        subheader='Weekly reports Overview'
        action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-5'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
              <i className={classnames(item.avatarIcon, 'text-[22px]')} />
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <div className='flex items-center gap-1'>
                  <i
                    className={classnames(
                      item.trend === 'negative' ? 'tabler-chevron-down text-error' : 'tabler-chevron-up text-success',
                      'text-xl'
                    )}
                  />
                  <Typography variant='body2' className='text-textDisabled'>{`${item.trendNumber}%`}</Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='pbs-[60px]'>
          <AppReactApexCharts type='bar' height={158} width='100%' series={series} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}

export default EarningReports
