import { reactive, watch, ref } from 'vue'
interface IMessage {
  text: string
  severity: 'success' | 'info' | 'warn' | 'error'
}
const messageInfo = () => {
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null)
  const message = reactive<IMessage>({
    text: '',
    severity: 'info'
  })
  const setMessage = (newMessageData: IMessage) => {
    message.text = newMessageData.text
    message.severity = newMessageData.severity
  }
  watch(
    message,
    () => {
      if (timeout.value) clearTimeout(timeout.value)
      timeout.value = setTimeout(() => {
        message.text = ''
      }, 2000)
    },
    { deep: true }
  )
  return { message, setMessage }
}
export default messageInfo()
