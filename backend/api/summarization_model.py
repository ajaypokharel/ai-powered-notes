from transformers import BartTokenizer, BartForConditionalGeneration


def call_summarization_model(lecture_transcript):

    # Load the fine-tuned model and tokenizer
    """Call the fine-tuned BART model to generate a summary of a given lecture transcript.
    Parameters:
        - lecture_transcript (str): The transcript of the lecture to be summarized.
    Returns:
        - generated_summary (str): The generated summary of the lecture.
    Processing Logic:
        - Load model and tokenizer.
        - Tokenize and generate summary.
        - Decode the generated summary.
        - Return the generated summary."""
    model = BartForConditionalGeneration.from_pretrained('../../speech_to_text/fine_tuned_bart_model')
    tokenizer = BartTokenizer.from_pretrained('../../speech_to_text/fine_tuned_bart_model')

    # Tokenize and generate summary
    inputs = tokenizer(lecture_transcript, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(inputs['input_ids'], max_length=650, num_beams=4, length_penalty=2.0, early_stopping=True)

    # Decode the generated summary
    generated_summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    print("Generated Summary:", generated_summary)

    return generated_summary