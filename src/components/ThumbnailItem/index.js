// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const selectedImage = () => {
    changeImage(id)
  }
  return (
    <li className="li-container" onClick={selectedImage}>
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
