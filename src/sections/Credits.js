import React from 'react';
import {
  Footer,
  Container,
  Content,
  Columns,
  Column,
  Icon
} from 'bloomer';
import {useTranslation} from 'react-i18next';


export default function Credits(props) {
  const {t} = useTranslation();
  return (
    <Footer id='footer'>
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                {t('credits.made-with-love', {icon: '❤'})}
              </p>
            </Column>
          </Columns>
          <Content isSize='small'>
            <p>{t('credits.copyright')}</p>
            {renderIconsCredits()}
          </Content>
        </Content>
      </Container>
    </Footer>
  );
};

function renderIconsCredits() {
  return (
    <div>
      Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
    </div>
  );
}
