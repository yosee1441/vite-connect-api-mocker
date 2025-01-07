import classnames from 'classnames'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classnames(className, 'container mx-auto')}>{children}</div>
  )
}

export default Container
