import React, { Component } from 'react';
import { Header, Footer, MainBanner, SingleService, RelatedContent, MoreProcedures, ConsultationForm, DentistQuote, ScheduleBanner, BlueBanner } from '../components';
import { ProcedurestemplateWrapper, ProcedurestemplateContent, FlexDiv, ProcedureH1, ProcedureH2, FlexWrapProcedure } from '../styled-components/pages/procedurestemplate';
import { Html } from '../styled-components/global';
import moreProceduresList from '../data/moreProceduresList';

class Procedurestemplate extends Component {
    render(){
      const { procedureId } = this.props.data;
      const data = moreProceduresList.find(a => a.service == procedureId);
      return (
          <ProcedurestemplateWrapper>
              <Header/>
              <ProcedurestemplateContent>
                <BlueBanner title={data.title}/>
                <FlexWrapProcedure>
                  <FlexDiv>
                    <ProcedureH1>{data.titleLeft}</ProcedureH1>
                    <hr className="partline"/>
                    <Html dangerouslySetInnerHTML={{__html: data.blurbLeft}}/>
                  </FlexDiv>
                  <FlexDiv>
                    <ProcedureH2>{data.titleRight}</ProcedureH2>
                    <hr className="partline"/>
                    <Html dangerouslySetInnerHTML={{__html: data.blurbRight}}/>
                  </FlexDiv>
                </FlexWrapProcedure>
                <ScheduleBanner/>
                <MoreProcedures title="Other Services" currentPage={data.service}/>
                <ConsultationForm/>
              </ProcedurestemplateContent>
              <Footer/>
          </ProcedurestemplateWrapper>
      );
    }
}

export default Procedurestemplate;
