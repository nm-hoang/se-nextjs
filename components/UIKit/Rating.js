/** @format */
import Icon from '../Icon'
const Rating = (props) => {
  const rating = []
  const valueRating = Math.round(props.valueRating * 2) / 2
  const haftStar = valueRating - ~~valueRating
  for (var i = 0; i < 5; i++) {
    if (i < ~~valueRating) {
      rating.push(<Icon key={i} icon="star-fill" />)
    } else {
      if (i == ~~valueRating && haftStar == 0.5) {
        rating.push(<Icon key={i} icon="star-half" />)
      } else {
        rating.push(<Icon key={i} icon="star" />)
      }
    }
  }
  return rating
}

export default Rating
