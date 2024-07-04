// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ProductAddHeader = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-6'>
      <div>
        <Typography variant='h4' className='mbe-1'>
          Add a new patient
        </Typography>
        {/* <Typography>Orders placed across your store</Typography> */}
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='tonal' color='secondary'>
          Discard
        </Button>
        <Button variant='tonal'>Save Draft</Button>
        <Button variant='contained'>Publish Product</Button>
      </div>
    </div>
  )
}

export default ProductAddHeader
