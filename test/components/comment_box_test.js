import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox', ()=>{
  let component;
  beforeEach(() => { 
    component = renderComponent(CommentBox);
  });
  it('has a text area', ()=>{
    expect(component.find('textarea')).to.exist
  });

  it('has a button', ()=>{
    expect(component.find('button')).to.expect
  });

  it('has the correct ClassName', ()=>{
    expect(component).to.have.class('comment-box')
  });

  describe('entering some text', ()=>{
    beforeEach(()=>{
      component.find('textarea').simulate('change', 'new comment');
    });   
    it('show that text in the test area', ()=>{
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when sumbitted clears the text', ()=>{
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});