import { 
  Item,
  Title,
  Content,
} from "../../styles/WeatherHighlight.styled";
interface ContentBoxProps {
  title: string;
  children: React.ReactNode;
}
function ContentBox({ title, children }: ContentBoxProps) {
  return (
    <Item>
      <Title>{title}</Title>
      <Content>
        {children}
      </Content>
    </Item>
  )
}

export default ContentBox;