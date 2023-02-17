import s from './FormInputFile.module.scss';

export default function FormInputFile({register}) {
  return <div className={s.box}>
      <label htmlFor="imageUpload" className={s.label}>Choose file</label>
      <input type="file" id="imageUpload" accept="image/png, image/jpeg" style={{display:'none'}} {...register('avatar')} />
    </div>
}
