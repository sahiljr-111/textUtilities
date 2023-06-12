import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const ConvertText = (props) => {
  const [textval, setText] = useState('Enter Text Here...');
  const upConvert = () => {
    setText(textval.toUpperCase());
  }
  const lowConvert = () => {
    setText(textval.toLowerCase());
  }
  const clearTextArea = () => {
    setText('');
  }
  const FirstUpConvert = () => {
    const arr = textval.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setText(str2);
  }
  const copyHandle = () => {
    navigator.clipboard.writeText(textval);
  }
  const RemoveExtraSpace = () => {
    setText(textval.split(/[ ]+/).join(" "));
  }
  return (
    <div className="main">
      <Form>
        <Container>
          <h2 style={{ textAlign: 'center' }} className="my-4">{props.title}</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Text Here to convert UpperCase</Form.Label> */}
            <Form.Control as="textarea" className={`bg-${props.mode} text-${props.mode === 'dark' ? "light" : 'dark'}`} rows={5} value={textval} onChange={(e) => setText(e.target.value)} />
          </Form.Group>

          <Button variant="danger" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={clearTextArea}>Clear</Button>{' '}
          <Button variant="warning" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={copyHandle} >Copy Text</Button>{' '}
          <Button variant="primary" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={upConvert}>to UpperCase</Button>{' '}
          <Button variant="primary" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={lowConvert}>to LowerCase</Button>{' '}
          <Button variant="primary" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={FirstUpConvert}>Capitalized</Button>{' '}
          <Button variant="primary" className="col-12 col-md-auto my-1 mb-md-0 butn" onClick={RemoveExtraSpace}>Remove Extra Space</Button>{' '}

          <h2 style={{ textAlign: 'left' }} className="mt-5">Text Summary</h2>
          <p className="mt-0 mb-0">{textval.length} Latters {textval.split(" ").length} Words</p>
          <p className="mt-0 mb-0">{0.008 * textval.split(" ").length} Per minute</p>

          <h2 style={{ textAlign: 'left' }} className="mt-5">Preview</h2>
          <p className="mt-0 mb-0 pre text-muted">{textval}</p>
        </Container>
      </Form>
    </div>
  )
}
export default ConvertText;