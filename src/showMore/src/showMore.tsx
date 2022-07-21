import { defineComponent, toRefs, CSSProperties, computed,ref,toRef  } from "vue";
import { showMoreProps } from './showMore-type'
import '../style/show-more.scss';
import { isNumber,filterText } from '../../_utils/is'

export default defineComponent({
    name: 'SMore',
    props: showMoreProps,
    setup(props, { slots }) {
        
        let text =filterText(props.text,props.len)
        let textLen =ref(props.len);
        const showMore = ()=> {
        
            if(textLen.value === props.text.length){
                textLen.value =props.len
                text =filterText(props.text,props.len)
            }else {
                textLen.value =props.text.length
                text = props.text
            }
            
        }
        return () => {
         
            console.log('打印一下')
            console.log(props)
            console.log( text)
            return (
                <span class="s-show-more"> 
                <span>{text}</span>
                
                {
                    textLen.value !== -1 && textLen.value < text.length && props.allowFold ? <a onClick={()=> showMore()} >{props.showText}</a> :''
                }
                
                {
                    textLen.value !== -1 && textLen.value === text.length && props.allowFold ? <a onClick={()=> showMore()} >{props.hiddenText}</a> :''
                }

               
                 </span>
                
            )





        }
    }
})