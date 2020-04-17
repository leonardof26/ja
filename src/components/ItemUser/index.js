import React from 'react';
import {
    Container,
    Content,
    Figure,
    TextContent,
    Title,
    Subtitle
} from './styles'
import { colors } from '@/styles';

export default ({ data: { avatar, name, position }, children, customTitleStyle, customSubtitleStyle, customContainer }) => {
    console.log('USER BLOCK: ', name, position)
    return (
        <Container style={{
            marginBottom: 15,
            ...customContainer
        }}>
            <Content>
                <Figure source={avatar} />
                <TextContent>
                    <Title style={customTitleStyle}>{name}</Title>
                    <Subtitle style={customSubtitleStyle}>{position}</Subtitle>
                </TextContent>
            </Content>
            {children}
        </Container>
    )
}