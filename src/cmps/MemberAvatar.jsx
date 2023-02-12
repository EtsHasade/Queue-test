import defaultImg from '../assets/img/avatar-default.svg'
export default function MemberAvatar({ people, isLoading }) {
  const value = (people?.firstName || '') + ' ' + (people?.lastName || '')
  return (
    <div className={'member-avatar name field ' + (isLoading ? 'loader' : 'value')}>
      <img src={people?.imgUrl || defaultImg} alt="" />
      <span>{value}</span>
    </div>
  )
}
