import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BedrockTextProcessingServiceService } from '../options/bedrock-text-processing-service.service';

@Component({
  selector: 'app-text-processor',
  templateUrl: './text-processor.component.html',
  styleUrls: ['./text-processor.component.css']
})

export class TextProcessorComponent implements OnInit {

  textProcessorForm: FormGroup = new FormGroup({})
  returnText: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private bedrockTextProcessingServiceService: BedrockTextProcessingServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.textProcessorForm = this.formBuilder.group(
      {
        prompt:['', Validators.required]
      }
    )
  }

  onSubmit() {
    if (this.textProcessorForm.valid) {
      let prompt = this.textProcessorForm.value['prompt']
      this.bedrockTextProcessingServiceService.getTextResult(prompt).subscribe((textResult) =>
        this.returnText = textResult
      )
    }
  }

}
