import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
  title:{
    type: 'input',
    label: 'Title'
  },
  categories: {
    type: 'input',
    label: 'Categories'
  },
  content: {
    type: 'textarea',
    label: 'Content'
  }
}
//['title', 'categories', 'content'];

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = (props) => {
    this.props.createPost(props)
      .then((value)=> {
        //blog post has been created, navigate user to index.
        // we navigate by calling this.context.router.push with the new path to navigate to.
        this.context.router.push('/');
      }, (reason)=>{
        //error
        console.log(reason)
      });
  }
  renderField(fieldConfig, field){
    const fieldHelper = this.props.fields[field];
    return(
        <div key={fieldConfig.label} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
          <label>{fieldConfig.label}</label>
          <fieldConfig.type type='text' className='form-control' {...fieldHelper} />
          <div className='text-help'>
            {fieldHelper.touched ? fieldHelper.error : ""}
          </div>
        </div>
      );
  }
  render(){
    const { handleSubmit } = this.props

    return(
        <div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <h3>Create a new post</h3>
              {_.map(FIELDS, this.renderField.bind(this))}
            <button type='submit' className='btn btn-primary'>Submit</button>
            <Link to='/' className='btn btn-danger'>Cancel</Link>
          </form>
        </div>
      );
  }
}


function validate(values){
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]){
      errors[field] = `${field} cant be blank`;
    }
  })
  return errors;
}
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// rduxform: first argument is form config, 2nd mapStateToProps, 3nd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNew',
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);