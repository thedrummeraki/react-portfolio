import React from 'react';
import {
  Footer,
  Container,
  Content,
  Columns,
  Column,
  Icon
} from 'bloomer';


export default function Credits(props) {
  return (
    <Footer id='footer'>
      <Container>
        <Content>
          <Columns>
            <Column isFull>
              <p>
                Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon>
                by <b>Akinyele Cafe-Febrissy</b>
              </p>
            </Column>
          </Columns>
          <Content isSize='small'>
            <p>Copyright © 2014-2019 Akinyele Cafe-Febrissy</p>
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
