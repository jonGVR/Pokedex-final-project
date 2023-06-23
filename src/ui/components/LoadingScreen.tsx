import loadingGif from '../../assets/svg/loading.gif'
import './LoadingScreen.css'

export const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img className="loading-gif" src={loadingGif} alt="" />
    </div>
  )
}
