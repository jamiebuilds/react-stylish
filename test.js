import test from 'ava';
import {getStyles, PropType} from './';

test('getStyles', t => {
  const result = getStyles({
    foo: 'className',
    bar: {display: 'block'}
  });

  t.same(result, {
    foo: {className: 'className'},
    bar: {style: {display: 'block'}}
  });
});
