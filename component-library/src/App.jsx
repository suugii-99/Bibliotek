import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Card from './components/Card';
import image from './assets/image.png';


function App() {
  return (
    
        

    <div className="p-4">
      <h1 className="text-2xl font-bold">Component Library</h1>
      
      <h2 className="mt-6">Buttons</h2>
      <Button size="small" color="primary" disabled={false}>Small Button</Button>
      <Button size="large" color="secondary">Large Button</Button>
      
      <h2 className="mt-6">Alerts</h2>
      <Alert color="red" icon="⚠️">This is an alert message!</Alert>

      <h2 className="mt-6">Badges</h2>
      <Badge color="blue" size="medium" icon="🌟">New</Badge>

      <h2 className="mt-6">Cards</h2>
      

      <Card 
        href="#"
        imgAlt="Beskrivning av bilden"
        imgSrc={image} // Använd den importerade bilden här
      >
        Detta är en exempelbeskrivning för kortet.
      </Card>

    </div>
  );
}

export default App;
