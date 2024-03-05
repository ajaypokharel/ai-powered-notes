from transformers import BartTokenizer, BartForConditionalGeneration


def call_summarization_model(lecture_transcript):

    # Load the fine-tuned model and tokenizer
    model = BartForConditionalGeneration.from_pretrained('../../speech_to_text/fine_tuned_bart_model')
    tokenizer = BartTokenizer.from_pretrained('../../speech_to_text/fine_tuned_bart_model')

    # Tokenize and generate summary
    inputs = tokenizer(lecture_transcript, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(inputs['input_ids'], max_length=650, num_beams=4, length_penalty=2.0, early_stopping=True)

    # Decode the generated summary
    generated_summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    print("Generated Summary:", generated_summary)

    return generated_summary