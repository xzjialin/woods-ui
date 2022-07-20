import { defineComponent, toRefs, CSSProperties, computed } from "vue";
import { spaceProps, SpaceSize } from './space-type'
import '../style/space.scss';
import { isNumber } from '../../_utils/is'
import { getAllElements } from '../../_utils/vue-utils'

export default defineComponent({
    name: 'SSpace',
    props: spaceProps,
    setup(props, { slots }) {
        const prefixCls = 's-space';

        const { direction, align, wrap, fill, size,justify } = toRefs(props);
        const warpCla = wrap.value ? `${prefixCls}-wrap` : '';
        const fillCla = fill.value ? `${prefixCls}-fill` : '';
        const alignCla = align.value ? ` ${prefixCls}-align-${align.value}` : '';
       const justifyCla = justify.value ? ` ${prefixCls}-justify-${justify.value}` : '';
        const classes = computed(() => [
            prefixCls,
            `${prefixCls}-${direction.value}`,
            warpCla,
            fillCla,
            alignCla,
            justifyCla
        ])

        const sizeMap = {
            mini: '4px',
            small: '8px',
            medium: '16px',
            large: '28px'
        }
        const getMargin = (size: SpaceSize | number | string) => {
            if (isNumber(size)) return size + 'px'
            return sizeMap[size as unknown as SpaceSize] ?? size + 'px'
        }
        const getStyle = (isLast: boolean): CSSProperties => {
            const style: CSSProperties = {}
            const marginRight = getMargin(props.size)
            const marginBottom = getMargin(props.size)
            if (isLast) {
                return props.wrap ? { marginBottom } : {}
            }
            if (props.direction === 'horizontal') {
                style.marginRight = marginRight
            }
            if (props.direction === 'vertical' || props.wrap) {
                style.marginBottom = marginBottom
            }

            return style
        }
        return () => {
            const children = getAllElements(slots.default?.())

            return (
                <div class={classes.value}>
                    {children.map((item, index) => (
                        <div
                            key={index}
                            class={`${prefixCls}-item`}
                            style={getStyle(children.length - 1 === index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )





        }
    }
})