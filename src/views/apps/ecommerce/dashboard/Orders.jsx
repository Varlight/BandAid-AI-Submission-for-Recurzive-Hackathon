'use client'

// React Imports
import { Fragment, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

// Vars
const data = {
  new: [
    {
      sender: {
        name: 'Azithromycin',
        address: 'Before food'
      },
      receiver: {
        name: 'Adderall',
        address: ' After food'
      }
    },
    {
      sender: {
        name: 'Amitriptyline',
        address: 'After food'
      },
      receiver: {
        name: 'Arthur West',
        address: '156 Blaze, California (CA), 925878'
      }
    }
  ],
  preparing: [
    {
      sender: {
        name: 'Ativan',
        address: 'After food'
      },
      receiver: {
        name: 'Lisinopril',
        address: 'After food'
      }
    },
    {
      sender: {
        name: 'Naproxen',
        address: 'After food'
      },
      receiver: {
        name: 'Xanax',
        address: 'After food'
      }
    }
  ],
  shipping: [
    {
      sender: {
        name: 'Omeprazole',
        address: 'After food'
      },
      receiver: {
        name: 'Amoxicillin',
        address: 'After food'
      }
    },
    {
      sender: {
        name: 'Metformin',
        address: 'After food'
      },
      receiver: {
        name: 'Aspirin',
        address: 'After food'
      }
    }
  ]
}

const Orders = () => {
  // States
  const [value, setValue] = useState('new')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardHeader
        title='Prescription'
        subheader='Drugs to be taken'
        action={<OptionMenu options={['Show all medicines', 'Update', 'Refresh']} />}
        className='pbe-4'
      />
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
          <Tab value='new' label='Morning' />
          <Tab value='preparing' label='Afternoon' />
          <Tab value='shipping' label='Night' />
        </TabList>
        <TabPanel value={value} className='pbs-0'>
          <CardContent>
            {data[value].map((item, index) => {
              return (
                <Fragment key={index}>
                  <Timeline>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot variant='outlined' className='mlb-0'>
                          <i className='tabler-circle-check text-xl text-success' />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-5 pbe-5'>
                        <Typography variant='body2' className='uppercase' color='success.main'>
                          
                        </Typography>
                        <Typography color='text.primary' className='font-medium'>
                          {item.sender.name}
                        </Typography>
                        <Typography>{item.sender.address}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot variant='outlined' className='mlb-0'>
                          {/* <i className='tabler-map-pin text-xl text-primary' /> */}
                          <i className='tabler-circle-check text-xl text-success' />

                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent className='flex flex-col pbe-0 gap-0.5 pbs-0 pis-5'>
                        {/* <Typography variant='body2' className='uppercase' color='primary.main'>
                          Receiver
                        </Typography> */}
                        <Typography color='text.primary' className='font-medium'>
                          {item.receiver.name}
                        </Typography>
                        <Typography>{item.receiver.address}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                  {index !== data[value].length - 1 && <Divider className='mlb-4 border-dashed' />}
                </Fragment>
              )
            })}
          </CardContent>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Orders
