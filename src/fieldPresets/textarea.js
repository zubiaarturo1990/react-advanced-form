export default {
  enforceProps: ({ props }) => ({
    cols: props.cols,
    rows: props.rows,
    maxLength: props.maxLength,
    placeholder: props.placeholder,
    wrap: props.wrap,
  }),
}
