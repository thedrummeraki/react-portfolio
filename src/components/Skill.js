import React from 'react';
import {Container, Progress, Columns, Column} from 'bloomer';

const RATING_MAP = [
  {id: 1, class: 'beginner', value: 20},
  {id: 2, class: 'okay', value: 40},
  {id: 3, class: 'average', value: 50},
  {id: 4, class: 'strong', value: 75},
  {id: 5, class: 'expert', value: 96},
];

export default function Skill(props) {
  const rating = props.rating ? RATING_MAP.filter(r => r.id === props.rating)[0] : null;
  const {name} = props;

  if (rating && name) {
    return (
      <Container className="Skill">
        <Columns>
          <Column isSize={3}>{name}</Column>
          <Column isSize={9}>
            <Progress isSize='small' className={rating.class} value={rating.value} max={100} />
          </Column>
        </Columns>
      </Container>
    );
  }
  return null;
}
