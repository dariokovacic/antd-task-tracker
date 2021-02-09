import { Button } from 'antd';

const Footer = () => {
  const date = new Date();
  const style = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <footer style={style}>
      <span>Copyright &copy; {date.getFullYear()}</span>
      <Button type="link">Verzija</Button>
    </footer>
  )
}

export default Footer
