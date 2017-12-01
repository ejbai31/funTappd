import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'sakf4ypp';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ejbai31/image/upload';

class BeerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      beer: {
        id: this.props.match.params.id,
        name: this.props.fields.name,
        style: this.props.fields.style,
        abv: this.props.fields.abv,
        rating: this.props.fields.rating,
        description: this.props.fields.description,
        brewery: this.props.fields.brewery,
      },
      uploadedFileCloudinaryUrl: ''
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  componentDidMount(){
    console.log('in did mount');
    console.log();
    if(this.props.formType === "edit" && !!this.state.beer){
      console.log('in if state');
      this.props.fetchBeer(this.props.match.params.id);
    }
    console.log('end did mount');
  }
  
  componentWillReceiveProps(newProps){
    this.setState(newProps.fields);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.formType === "new"){
      console.log(this.state.beer);
      this.props.createBeer(this.state.beer)
        .then(() => this.props.history.push('/beers'));
    }else{
      console.log('edit');
      // console.log(this.state.beer);
      this.props.updateBeer(this.state.beer)
        .then(() => this.props.history.push('/beers'));
    }
  }
  
  update(e, field) {
    let newBeer = Object.assign({}, this.state.beer);
    switch(field){
      case 'name':
        newBeer.name = e.target.value;
        return this.setState({beer: newBeer});

      case 'style':
        newBeer.style = e.target.value;
        return this.setState({ beer: newBeer });
      
      case 'abv':
        newBeer.abv = e.target.value;
        return this.setState({ beer: newBeer });

      case 'description':
        newBeer.description = e.target.value;
        return this.setState({ beer: newBeer });
      
      case 'brewery':
        newBeer.brewery = e.target.value;
        return this.setState({ beer: newBeer });
     

      default: 
        return '';
    }



      // this.setState(
      //    { [beer][field]: e.target.value } }
      //   );
  }

  deleteBeer(e) {
    e.preventDefault();
    console.log(this.props.beer);
    this.props.deleteBeer(this.state.beer.id)
    .then(() => this.props.history.push('/beers'));
  }

  render(){
    console.log(this.state);
    let deleteButton = "";
    let formType = this.props.formType;
    if (formType === 'edit') {
      deleteButton = <button onClick={this.deleteBeer.bind(this)}>Delete</button>;
    }

    if (this.props.formType === "edit" && !this.props.fields) return null;
    console.log(this.props);
    return(
      <div className="create-beer-main">
        <form className="add-beer-form">
          <Dropzone
            className="form-pic-drop"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Upload an image!</p>
          </Dropzone>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
          </div>
          <h1>Add New Beer!</h1>
          <br />
          <h2>Beer Name</h2>
          <input 
          type="text" 
          onChange={e => this.update(e, 'name')}
          value={this.state.beer.name} />
          
          <h2>Brewery</h2>
          <input 
          onChange={e => this.update(e, 'brewery')}
          value={this.state.beer.brewery}
          type="text"/>
          
          <h2>Style</h2>
          <input 
          type="text" 
          onChange={e => this.update(e, 'style')}
          value={this.state.beer.style}/>
          
          <h2>ABV</h2>
          <input 
          type="number" 
          onChange={e => this.update(e, 'abv')}
          value={this.state.beer.abv}/>
          
          <h2>Description</h2> 
          <textarea cols="30" rows="10" 
          onChange={e => this.update(e, 'description')}
          value={this.state.beer.description}></textarea>
           
          <button onClick={this.handleSubmit}>Create!</button>
          {deleteButton}
        </form>
        
      </div>
    );
  }
}

export default BeerForm;