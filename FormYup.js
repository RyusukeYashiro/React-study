//検証ライブラリーのreact hook formを使用
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import *as yup from 'yup';
import styles from './buttonModules.module.css'

const today = new Date();
//const todoy = new Date(2024 , 6 , 26);
const maxDay = new Date();
console.log(today);
//const deadline = new Date(todoy);

maxDay.setDate(today.getDate() + 3);
//deadline.setDate(todoy.getDate() + 3);

const grads = [1 , 2, 3, 4];
//yupのほとんどは戻り値としてschemaオブジェクトを返す。
const schema = yup.object({
    //yupの使用例
    // フィールド名:yup
    // .データ型
    // .label(フィールドの日本語名)
    // .検証ルール

    date: yup
    .date()
    .label('日付')
    //nullable()でnullを有効な値として認識させる
    .nullable()
    .transform((value , orgValue) => orgValue === '' ? null : value)
    .required('>>>${label}は必須入力です<<<')
    .min(today , '>>>${label}の入力が無効です<<<')
    .max(maxDay , '>>>${label}の入力が無効です<<<'),

    name: yup
    .string()
    .label('名前')
    .transform((value, orgValue) => value.normalize('NFKC'))
    .required('>>>${label}は必須入力です<<<<')
    .max(20 , '>>>${label}は{max}文字以内で入力してください<<<'),

    studentGrade: yup
    .number()
    .label('学年')
    .required('>>>${label}は必須入力です<<<'),

    studentNumber: yup
    .string()
    .label('学籍番号')
    .required('>>>${label}は必須入力です<<<')
    .matches(/^[0-9]{10}$/ , '>>>${label}が適切ではありません<<<'),

    memo: yup
    .string()
    .label('リアクションペーバー')
    .test('ng' , 
        ({label}) => `${label}にNGワードが含まれています`,
        value => {
            const ngs = ['帰りたい' , '眠' , '暇'];
            for(const ng of ngs){
                if(value.includes(ng)){
                    return false;
                }
            }
            return true;
        })
    .required('>>>${label}は必須入力です<<<<')
    .min(300 , '>>>${label}は${min}文字以上でないといけません<<<')
});

export default function FormYup() {
    //フォームの初期化
    const { register , handleSubmit , formState: {errors , isDirty , isValid , isSubmitting}} = useForm({
        defaultValues: {
            data: '',
            name: '',
            studentGrade: 3,
            studentNumber: '',
            memo: ''
        },
        //定義したルールをReact hook Formに紐付けする
        resolver: yupResolver(schema),
    });

    //非同期処理を行なっている
    const onsubmit = data => {
        return new Promise(resolver => {
            setTimeout(() => {
                resolver();
                console.log(data);
            },4000);
        });
    }

    const onerror = e => console.log(e);

    return(
        <>
            <div className={styles.header}>
                <h1>情報科学</h1>
                <p>
                    担当:矢代琉介
                </p>
            </div>
            <form onSubmit={handleSubmit(onsubmit , onerror)} noValidate
                className={styles.formContainer}>
                <div>
                    <label className={styles.label}  htmlFor='date'>日付 : </label><br/>
                    <input id='date' type='date'
                        {...register('date')}
                        className={styles.inputField}/>
                    {errors.date && <div className={styles.errorMsg}>{errors.date.message}</div>}
                </div>
                <div>
                    <label className={styles.label} htmlFor='name'>名前 : </label>
                    <input id='name' type='text'
                        {...register('name')}
                        className={styles.inputField}/>
                </div>
                {errors.name && <div className={styles.errorMsg}>{errors.name.message}</div>}
                <div>
                    <label className={styles.label} htmlFor='studentGrade'>学年 : </label>
                    <select {...register('studentGrade')}
                        className={styles.selectField}>
                        {grads.map(elem => (
                            <option key={elem} value={elem}>
                                {elem}
                            </option>
                        ))}
                    </select>
                    {errors.studentGrade && <div>{errors.studentGrade.message}</div>}
                </div>
                <div>
                    <label className={styles.label} htmlFor='studentNumber'>学籍番号: </label><br/>
                    <input id="studentNumber" type='text'
                        {...register('studentNumber')}
                        className={styles.inputField}/>
                    {errors.studentNumber && <div className={styles.errorMsg}>{errors.studentNumber.message}</div>}
                </div>
                <div>
                    <label className={styles.label} htmlFor='memo'>記述欄: 授業で示されたテーマについて300字以上であなたの考えを踏まえ、論じてください</label><br/>
                    <textarea id='memo'
                        {...register('memo')}
                        className={styles.textareaField}></textarea>
                    {errors.memo && <div className={styles.errorMsg}>{errors.memo.message}</div>}
                </div>
                {/* isDirtyがfalse=フォームが変更されてない */}
                {/* isValidがfalse=検証に失敗している */}
                <div>
                    <button type='submit'
                        disabled={isSubmitting}
                        className={styles.button}>送信</button>
                    {isSubmitting && <div>...送信中...</div>}
                </div>
            </form>
        </>
        
    )
}
