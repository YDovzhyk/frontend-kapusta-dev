import s from './FormInputFile.scss';

export default function FormInputFile({ register }) {

  return <div>
    {/* <button className={s.btn} onClick={document.getElementById('j1_64')}>Find your file</button> */}
    <input type="file" accept="image/png, image/jpeg" id="j1_64" className={s.inputPart} {...register('avatar')} />
  </div>
}
