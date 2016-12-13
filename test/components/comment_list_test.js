import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', ()=>{
  let component;
  beforeEach(()=>{
    const props = { comments: ['comment1','comment2'] }
    component = renderComponent(CommentList,null, props );
  });

  it('shows comment in <Li>', ()=>{
    expect(component.find('li').length).to.equal(2);
  });

  it('shows comments provided',()=>{
    expect(component).to.contain('comment1');
    expect(component).to.contain('comment2')
  });
});